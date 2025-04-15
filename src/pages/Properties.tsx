import React, { useState, useEffect } from 'react';
import { propertyCategories } from '@/data/propertyData';
import PropertySearchBar from '@/components/PropertySearchBar';
import PropertyTableOfContents from '@/components/PropertyTableOfContents';
import PropertyTable from '@/components/PropertyTable';
import PropertyTableMobile from '@/components/PropertyTableMobile';
import SectionVisibilityControls, { VisibilitySettings } from '@/components/SectionVisibilityControls';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

let savedScrollPosition = 0;

const Properties = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);
  const [visibilitySettings, setVisibilitySettings] = useState<VisibilitySettings>({
    showSupport: true
  });

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
    
    if (location.state?.fromPropertyDetails) {
      if (location.state.scrollToProperty) {
        const element = document.getElementById(location.state.scrollToProperty);
        if (element) {
          window.setTimeout(() => {
            window.scrollTo(0, location.state.scrollPosition || 0);
            element.scrollIntoView({ block: 'center' });
          }, 100);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('general.cssProperties')}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {t('general.description')} – {t('general.properties')}
        </p>
      </div>
      
      <PropertySearchBar onSelectProperty={handleSelectProperty} />
      
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
    </div>
  );
};

export default Properties;
