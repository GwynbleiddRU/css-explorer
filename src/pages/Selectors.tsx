import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import SearchBar from '@/components/SearchBar';
import SelectorTable from '@/components/SelectorTable';
import SelectorTableMobile from '@/components/SelectorTableMobile';
import TableOfContents from '@/components/TableOfContents';
import { selectorCategories } from '@/data/selectorData';
import SectionVisibilityControls, { VisibilitySettings } from '@/components/SectionVisibilityControls';
import { ChevronUp } from 'lucide-react';
import { TOCItem } from '@/components/TableOfContents';

const Selectors = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const searchBarRef = useRef<HTMLDivElement>(null);
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visibilitySettings, setVisibilitySettings] = useState<VisibilitySettings>({
    showSupport: true
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Transform selector categories to TOCItem format
  const tocItems: TOCItem[] = selectorCategories.map(category => ({
    id: category.id,
    name: category.name,
    children: category.selectors.map(selector => ({
      id: selector.id,
      name: selector.name,
      parameters: selector.parameters
    }))
  }));
  
  useEffect(() => {
    const savedState = localStorage.getItem('expandedSelectorCategories');
    if (savedState) {
      try {
        setExpandedCategories(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved selector category state:', e);
        initializeDefaultExpanded();
      }
    } else {
      initializeDefaultExpanded();
    }

    const savedVisibility = localStorage.getItem('selectorVisibilitySettings');
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
    
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Object.keys(expandedCategories).length > 0) {
      localStorage.setItem('expandedSelectorCategories', JSON.stringify(expandedCategories));
    }
  }, [expandedCategories]);
  
  useEffect(() => {
    localStorage.setItem('selectorVisibilitySettings', JSON.stringify(visibilitySettings));
  }, [visibilitySettings]);
  
  // Check if search bar is visible and control scroll button visibility
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
    selectorCategories.forEach((category, index) => {
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

  const handleSelect = (id: string) => {
    setActiveId(id);
    
    const category = selectorCategories.find(cat => 
      cat.selectors.some(s => s.id === id)
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
        <h1 className="text-3xl font-bold mb-2">{t('general.cssSelectors')}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {t('general.description')} – {t('general.selectors')}
        </p>
      </div>
      
      <div ref={searchBarRef}>
        <SearchBar onSelectSelector={handleSelect} />
      </div>
      
      {isMobile ? (
        <div className="mt-6">
          <SectionVisibilityControls 
            settings={visibilitySettings}
            onChange={setVisibilitySettings}
            supportLabel={t('general.browserSupport')}
          />
          
          <SelectorTableMobile 
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            activeSelectorId={activeId}
            visibilitySettings={visibilitySettings}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <div className="lg:col-span-1">
            <TableOfContents 
              items={tocItems}
              expandedCategories={expandedCategories} 
              toggleCategory={toggleCategory}
              onSelectItem={handleSelect}
            />
          </div>
          
          <div className="lg:col-span-3">
            <SectionVisibilityControls 
              settings={visibilitySettings}
              onChange={setVisibilitySettings}
              supportLabel={t('general.browserSupport')}
            />
            
            <SelectorTable 
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              activeSelectorId={activeId}
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

export default Selectors;
