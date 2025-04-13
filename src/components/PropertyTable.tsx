
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propertyCategories } from '@/data/propertyData';
import { PropertyCategory } from '@/types/properties';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useTranslation } from 'react-i18next';
import BrowserIcon from './BrowserIcon';
import { VisibilitySettings } from './SectionVisibilityControls';
import { Link } from 'react-router-dom';

interface PropertyTableProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  activePropertyId: string | null;
  visibilitySettings: VisibilitySettings;
}

const PropertyTable: React.FC<PropertyTableProps> = ({ 
  expandedCategories, 
  toggleCategory,
  activePropertyId,
  visibilitySettings
}) => {
  const propertyRefs = useRef<Record<string, HTMLTableRowElement | null>>({});
  const { t, i18n } = useTranslation(['translation', 'propertyDescriptions']);

  useEffect(() => {
    if (activePropertyId && propertyRefs.current[activePropertyId]) {
      propertyRefs.current[activePropertyId]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Highlight effect
      const row = propertyRefs.current[activePropertyId];
      if (row) {
        row.classList.add('bg-secondary/30');
        setTimeout(() => {
          row.classList.remove('bg-secondary/30');
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
    <TableRow key={`${category.id}-header`} className="category-row">
      <TableCell colSpan={visibilitySettings.showSupport ? 4 : 3} className="p-0">
        <div 
          className="category-header"
          onClick={() => toggleCategory(category.id)}
        >
          {expandedCategories[category.id] ? (
            <ChevronDown className="h-4 w-4 mr-2" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-2" />
          )}
          <span className="font-medium">{t(`categories.${category.id}`, { defaultValue: category.name })}</span>
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="w-full overflow-auto">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead>{t('general.property')}</TableHead>
            <TableHead>{t('general.syntax')}</TableHead>
            <TableHead>{t('general.description')}</TableHead>
            {visibilitySettings.showSupport && (
              <TableHead>{t('general.browserSupport')}</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {propertyCategories.map(category => (
            <React.Fragment key={category.id}>
              {renderCategoryHeader(category)}
              
              {expandedCategories[category.id] && category.properties.map(property => (
                <TableRow 
                  key={property.id}
                  id={property.id}
                  ref={el => propertyRefs.current[property.id] = el}
                  className="transition-colors duration-300"
                >
                  <TableCell className="align-top">
                    <Link to={`/properties/${property.id}`} className="font-mono font-medium text-primary hover:underline">
                      {property.name}
                    </Link>
                  </TableCell>
                  <TableCell className="align-top max-w-[260px] w-1/5">
                    <div className="font-mono text-sm break-words whitespace-pre-wrap">
                      {property.syntax}
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <p className="whitespace-pre-wrap">{getDescription(property.id, property.description)}</p>
                  </TableCell>
                  {visibilitySettings.showSupport && (
                    <TableCell className="align-top">
                      <div className="flex flex-wrap gap-2">
                        {property.browsers.map((browser, i) => (
                          <BrowserIcon key={i} browser={browser} />
                        ))}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTable;
