import React, { useState, useEffect, useRef } from 'react';
import { propertyCategories } from '@/data/propertyData';
import PropertySearchBar from '@/components/PropertySearchBar';
import PropertyTableOfContents from '@/components/PropertyTableOfContents';
import PropertyTable from '@/components/PropertyTable';
import PropertyTableMobile from '@/components/PropertyTableMobile';
import SectionVisibilityControls, { VisibilitySettings } from '@/components/SectionVisibilityControls';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

let savedScrollPosition = 0;

const Properties = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const searchBarRef = useRef<HTMLDivElement>(null);
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);
  const [visibilitySettings, setVisibilitySettings] = useState<VisibilitySettings>({
    showSupport: true
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [initialScrollPerformed, setInitialScrollPerformed] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('expandedPropertyCategories');
    if (savedState) {
      try {
        setExpandedCategories(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved property category state:', e);
        initializeDefaultExpanded();
      }
    } else {
      initializeDefaultExpanded();
    }

    const savedVisibility = localStorage.getItem('propertyVisibilitySettings');
    if (savedVisibility) {
      try {
        const saved = JSON.parse(savedVisibility);
        setVisibilitySettings({
          showSupport: saved.showSupport ?? true
        });
      } catch (e) {
        console.error('Error parsing saved visibility settings:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (!initialScrollPerformed && location.state?.fromPropertyDetails) {
      if (location.state.scrollToProperty) {
        // Set this property as active to ensure it gets highlighted
        setActivePropertyId(location.state.scrollToProperty);
        
        // Find the category for this property
        const category = propertyCategories.find(cat => 
          cat.properties.some(prop => prop.id === location.state.scrollToProperty)
        );
        
        // Make sure the category is expanded
        if (category && !expandedCategories[category.id]) {
          setExpandedCategories(prev => ({
            ...prev,
            [category.id]: true
          }));
        }
        
        // Prevent other scroll operations until this one is complete
        setInitialScrollPerformed(true);
        
        // Use a slight delay to ensure DOM is updated before scrolling
        setTimeout(() => {
          // First restore the previous scroll position
          if (location.state.scrollPosition) {
            window.scrollTo(0, location.state.scrollPosition);
          }
          
          // Then scroll to the element itself
          const element = document.getElementById(location.state.scrollToProperty);
          if (element) {
            // Use a longer delay to ensure the scroll completes
            setTimeout(() => {
              element.scrollIntoView({ block: 'center', behavior: 'smooth' });
              
              // Clear the navigation state to prevent unintended navigation
              navigate(location.pathname, { replace: true, state: {} });
            }, 200);
          } else {
            // If element not found, just clear the navigation state
            navigate(location.pathname, { replace: true, state: {} });
          }
        }, 100);
      } else {
        // Clear the navigation state if no specific property to scroll to
        navigate(location.pathname, { replace: true, state: {} });
      }
    } else if (!location.state?.fromPropertyDetails && !initialScrollPerformed) {
      // Only scroll to top if not coming from property details and initial scroll not yet performed
      window.scrollTo(0, 0);
      setInitialScrollPerformed(true);
    }
  }, [location.state, expandedCategories, navigate, location.pathname, initialScrollPerformed]);

  useEffect(() => {
    if (Object.keys(expandedCategories).length > 0) {
      localStorage.setItem('expandedPropertyCategories', JSON.stringify(expandedCategories));
    }
  }, [expandedCategories]);

  useEffect(() => {
    localStorage.setItem('propertyVisibilitySettings', JSON.stringify(visibilitySettings));
  }, [visibilitySettings]);

  useEffect(() => {
    const handleBeforeNavigate = () => {
      savedScrollPosition = window.scrollY;
    };

    window.addEventListener('beforeunload', handleBeforeNavigate);
    return () => {
      handleBeforeNavigate();
      window.removeEventListener('beforeunload', handleBeforeNavigate);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (searchBarRef.current) {
        const searchBarPosition = searchBarRef.current.getBoundingClientRect();
        setShowScrollTop(searchBarPosition.bottom < 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initializeDefaultExpanded = () => {
    const defaults: Record<string, boolean> = {};
    propertyCategories.forEach((category, index) => {
      defaults[category.id] = index === 0;
    });
    setExpandedCategories(defaults);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSelectProperty = (propertyId: string) => {
    setActivePropertyId(propertyId);
    
    const category = propertyCategories.find(cat => 
      cat.properties.some(prop => prop.id === propertyId)
    );
    
    if (category && !expandedCategories[category.id]) {
      setExpandedCategories(prev => ({
        ...prev,
        [category.id]: true
      }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('general.cssProperties')}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {t('general.description')} – {t('general.properties')}
        </p>
      </div>
      
      <div ref={searchBarRef}>
        <PropertySearchBar onSelectProperty={handleSelectProperty} />
      </div>
      
      {isMobile ? (
        <div className="mt-6">
          <SectionVisibilityControls 
            settings={visibilitySettings}
            onChange={setVisibilitySettings}
            supportLabel={t('general.browserSupport')}
          />
          
          <PropertyTableMobile 
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            activePropertyId={activePropertyId}
            visibilitySettings={visibilitySettings}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <div className="lg:col-span-1">
            <PropertyTableOfContents 
              expandedCategories={expandedCategories} 
              toggleCategory={toggleCategory}
              onSelectProperty={handleSelectProperty}
            />
          </div>
          
          <div className="lg:col-span-3">
            <SectionVisibilityControls 
              settings={visibilitySettings}
              onChange={setVisibilitySettings}
              supportLabel={t('general.browserSupport')}
            />
            
            <PropertyTable 
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              activePropertyId={activePropertyId}
              visibilitySettings={visibilitySettings}
            />
          </div>
        </div>
      )}

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label={t('general.scrollToTop')}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Properties;
