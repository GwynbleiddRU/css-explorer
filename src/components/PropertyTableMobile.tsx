
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propertyCategories } from '@/data/propertyData';
import { PropertyCategory, CssProperty as Property } from '@/types/properties';
import { useTranslation } from 'react-i18next';
import BrowserIcon from './BrowserIcon';
import { VisibilitySettings } from './SectionVisibilityControls';
import { Link } from 'react-router-dom';

interface PropertyTableMobileProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  activePropertyId: string | null;
  visibilitySettings: VisibilitySettings;
}

const PropertyTableMobile: React.FC<PropertyTableMobileProps> = ({
  expandedCategories,
  toggleCategory,
  activePropertyId,
  visibilitySettings
}) => {
  const propertyRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { t, i18n } = useTranslation(['translation', 'propertyDescriptions']);

  useEffect(() => {
    if (activePropertyId && propertyRefs.current[activePropertyId]) {
      propertyRefs.current[activePropertyId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Highlight effect
      const element = propertyRefs.current[activePropertyId];
      if (element) {
        element.classList.add('bg-secondary/30');
        setTimeout(() => {
          element.classList.remove('bg-secondary/30');
        }, 1500);
      }
    }
  }, [activePropertyId]);

  // Get translated description or fall back to English
  const getDescription = (propertyId: string, description: string) => {
    const translatedDescription = t(`${propertyId}`, {
      ns: 'propertyDescriptions',
      defaultValue: ''
    });

    return translatedDescription || description;
  };

  const renderCategoryHeader = (category: PropertyCategory) => (
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

  const renderProperty = (property: Property) => (
    <div 
      key={property.id}
      id={property.id}
      ref={el => propertyRefs.current[property.id] = el}
      className="mb-6 p-4 border rounded-lg bg-card transition-colors duration-300"
    >
      <div className="font-mono font-medium text-primary text-lg mb-2">
        <Link to={`/properties/${property.id}`} className="hover:underline">
          {property.name}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.syntax')}</div>
          <div className="font-mono text-sm p-2 bg-muted/50 rounded-md whitespace-pre-wrap">
            {property.syntax}
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.description')}</div>
          <p className="whitespace-pre-wrap">{getDescription(property.id, property.description)}</p>
        </div>
        
        {visibilitySettings.showSupport && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">{t('general.browserSupport')}</div>
            <div className="flex flex-wrap gap-2">
              {property.browsers.map((browser, i) => (
                <BrowserIcon key={i} browser={browser} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {propertyCategories.map(category => (
        <div key={category.id} className="mb-4">
          {renderCategoryHeader(category)}
          
          {expandedCategories[category.id] && (
            <div className="space-y-4">
              {category.properties.map(property => renderProperty(property))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyTableMobile;
