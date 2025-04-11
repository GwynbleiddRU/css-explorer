
import React, { useState, useEffect } from 'react';
import { selectorCategories } from '@/data/selectorData';
import SearchBar from '@/components/SearchBar';
import TableOfContents, { TOCItem } from '@/components/TableOfContents';
import SelectorTable from '@/components/SelectorTable';
import SelectorTableMobile from '@/components/SelectorTableMobile';
import SectionVisibilityControls, { VisibilitySettings } from '@/components/SectionVisibilityControls';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // State for tracking expanded categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activeSelectorId, setActiveSelectorId] = useState<string | null>(null);
  const [visibilitySettings, setVisibilitySettings] = useState<VisibilitySettings>({
    showExamples: true,
    showSupport: true
  });

  // Initialize expanded categories from localStorage or defaults
  useEffect(() => {
    const savedState = localStorage.getItem('expandedCategories');
    if (savedState) {
      try {
        setExpandedCategories(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved category state:', e);
        initializeDefaultExpanded();
      }
    } else {
      initializeDefaultExpanded();
    }

    // Load visibility settings
    const savedVisibility = localStorage.getItem('selectorVisibilitySettings');
    if (savedVisibility) {
      try {
        setVisibilitySettings(JSON.parse(savedVisibility));
      } catch (e) {
        console.error('Error parsing saved visibility settings:', e);
      }
    }
  }, []);

  // Save expanded state to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(expandedCategories).length > 0) {
      localStorage.setItem('expandedCategories', JSON.stringify(expandedCategories));
    }
  }, [expandedCategories]);

  // Save visibility settings
  useEffect(() => {
    localStorage.setItem('selectorVisibilitySettings', JSON.stringify(visibilitySettings));
  }, [visibilitySettings]);

  const initializeDefaultExpanded = () => {
    const defaults: Record<string, boolean> = {};
    selectorCategories.forEach(category => {
      defaults[category.id] = category.id === 'basic'; // Only expand basic by default
    });
    setExpandedCategories(defaults);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSelectSelector = (selectorId: string) => {
    setActiveSelectorId(selectorId);
    
    // Find the category that contains this selector
    const category = selectorCategories.find(cat => 
      cat.selectors.some(sel => sel.id === selectorId)
    );
    
    // Ensure the category is expanded
    if (category && !expandedCategories[category.id]) {
      setExpandedCategories(prev => ({
        ...prev,
        [category.id]: true
      }));
    }
  };

  // Convert selectorCategories to the format expected by TableOfContents
  const tocItems: TOCItem[] = selectorCategories.map(category => ({
    id: category.id,
    name: category.name,
    children: category.selectors.map(selector => ({
      id: selector.id,
      name: selector.name,
      parameters: selector.parameters
    }))
  }));

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('general.cssSelectors')}</h1>
        <p className="text-muted-foreground max-w-3xl">
          {t('general.description')} – {t('general.selectors')}
        </p>
      </div>
      
      <SearchBar onSelectSelector={handleSelectSelector} />

      {isMobile ? (
        <div className="mt-6">
          <SectionVisibilityControls 
            settings={visibilitySettings}
            onChange={setVisibilitySettings}
            supportLabel={t('general.supportedPlatforms')}
          />

          <SelectorTableMobile 
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            activeSelectorId={activeSelectorId}
            visibilitySettings={visibilitySettings}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <div className="lg:col-span-1">
            <TableOfContents 
              title={t('general.selectors')}
              items={tocItems}
              expandedCategories={expandedCategories} 
              toggleCategory={toggleCategory}
              onSelectItem={handleSelectSelector}
            />
          </div>
          
          <div className="lg:col-span-3">
            <SectionVisibilityControls 
              settings={visibilitySettings}
              onChange={setVisibilitySettings}
              supportLabel={t('general.supportedPlatforms')}
            />

            <SelectorTable 
              expandedCategories={expandedCategories}
              toggleCategory={toggleCategory}
              activeSelectorId={activeSelectorId}
              visibilitySettings={visibilitySettings}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
