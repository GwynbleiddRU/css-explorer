
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { selectorCategories } from '@/data/selectorData';
import SelectorExample from './SelectorExample';
import { SelectorCategory, Selector } from '@/types/selectors';
import { useTranslation } from 'react-i18next';
import BrowserIcon from './BrowserIcon';
import { VisibilitySettings } from './SectionVisibilityControls';

interface SelectorTableMobileProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  activeSelectorId: string | null;
  visibilitySettings: VisibilitySettings;
}

const SelectorTableMobile: React.FC<SelectorTableMobileProps> = ({
  expandedCategories,
  toggleCategory,
  activeSelectorId,
  visibilitySettings
}) => {
  const selectorRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { t } = useTranslation(['translation', 'selectorDescriptions']);

  useEffect(() => {
    if (activeSelectorId && selectorRefs.current[activeSelectorId]) {
      selectorRefs.current[activeSelectorId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      
      // Highlight effect
      const element = selectorRefs.current[activeSelectorId];
      if (element) {
        element.classList.add('bg-secondary/30');
        setTimeout(() => {
          element.classList.remove('bg-secondary/30');
        }, 1500);
      }
    }
  }, [activeSelectorId]);

  // Get translated description or fall back to English
  const getDescription = (selectorId: string, description: string) => {
    const translatedDescription = t(`${selectorId}`, {
      ns: 'selectorDescriptions',
      defaultValue: ''
    });
    
    return translatedDescription || description;
  };

  const renderCategoryHeader = (category: SelectorCategory) => (
    <div 
      key={`${category.id}-header`}
      className="category-header mb-2"
      onClick={() => toggleCategory(category.id)}
    >
      {expandedCategories[category.id] ? (
        <ChevronDown className="h-4 w-4 mr-2" />
      ) : (
        <ChevronRight className="h-4 w-4 mr-2" />
      )}
      <span className="font-medium">{t(`categories.${category.id}`, { defaultValue: category.name })}</span>
    </div>
  );

  const renderSelector = (selector: Selector) => (
    <div 
      key={selector.id}
      id={selector.id}
      ref={el => selectorRefs.current[selector.id] = el}
      className="mb-6 p-4 border rounded-lg bg-card transition-colors duration-300"
    >
      <div className="font-mono font-medium text-primary text-lg mb-2">
        {selector.name}
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {selector.parameters && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.parameters')}</div>
            <div className="font-mono text-sm p-2 bg-muted/50 rounded-md whitespace-pre-wrap">
              {selector.parameters}
            </div>
          </div>
        )}
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.description')}</div>
          <p className="whitespace-pre-wrap">{getDescription(selector.id, selector.description)}</p>
        </div>
        
        {visibilitySettings.showSupport && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.supportedPlatforms')}</div>
            <div className="flex flex-wrap gap-2">
              {selector.platforms.map((platform, i) => (
                <BrowserIcon key={i} browser={platform} />
              ))}
            </div>
          </div>
        )}
        
        {visibilitySettings.showExamples && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.example')}</div>
            <SelectorExample selector={selector} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {selectorCategories.map(category => (
        <div key={category.id} className="mb-4">
          {renderCategoryHeader(category)}
          
          {expandedCategories[category.id] && (
            <div className="space-y-4">
              {category.selectors.map(selector => renderSelector(selector))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectorTableMobile;
