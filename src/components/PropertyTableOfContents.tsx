
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propertyCategories } from '@/data/propertyData';
import { useTranslation } from 'react-i18next';

interface PropertyTableOfContentsProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  onSelectProperty: (propertyId: string) => void;
}

const PropertyTableOfContents: React.FC<PropertyTableOfContentsProps> = ({
  expandedCategories,
  toggleCategory,
  onSelectProperty
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="table-of-contents bg-card">
      <h2 className="text-lg font-medium mb-4">{t('general.tableOfContents')}</h2>
      <ul className="space-y-2">
        {propertyCategories.map(category => (
          <li key={category.id} className="mb-2">
            <div 
              className="flex items-center cursor-pointer hover:text-primary"
              onClick={() => toggleCategory(category.id)}
            >
              {expandedCategories[category.id] ? 
                <ChevronDown className="h-4 w-4 mr-1" /> : 
                <ChevronRight className="h-4 w-4 mr-1" />
              }
              <span className="font-medium">{category.name}</span>
            </div>
            
            {expandedCategories[category.id] && (
              <ul className="ml-5 mt-1 space-y-1">
                {category.properties.map(property => (
                  <li key={property.id}>
                    <a 
                      href={`#${property.id}`}
                      className="text-sm hover:text-primary cursor-pointer flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectProperty(property.id);
                      }}
                    >
                      {property.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyTableOfContents;
