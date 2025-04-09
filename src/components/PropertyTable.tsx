
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propertyCategories } from '@/data/propertyData';
import PropertyExample from './PropertyExample';
import { PropertyCategory } from '@/types/properties';
import { Badge } from '@/components/ui/badge';

interface PropertyTableProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  activePropertyId: string | null;
}

const PropertyTable: React.FC<PropertyTableProps> = ({ 
  expandedCategories, 
  toggleCategory,
  activePropertyId
}) => {
  const propertyRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

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

  // Find which category contains the active property
  useEffect(() => {
    if (activePropertyId) {
      // Find the category that contains the active property
      const category = propertyCategories.find(cat => 
        cat.properties.some(prop => prop.id === activePropertyId)
      );
      
      if (category && !expandedCategories[category.id]) {
        toggleCategory(category.id);
      }
    }
  }, [activePropertyId, expandedCategories, toggleCategory]);

  const renderCategoryHeader = (category: PropertyCategory) => (
    <tr key={`${category.id}-header`}>
      <td colSpan={6} className="p-0">
        <div 
          className="category-header"
          onClick={() => toggleCategory(category.id)}
        >
          {expandedCategories[category.id] ? (
            <ChevronDown className="h-4 w-4 mr-2" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-2" />
          )}
          <span className="font-medium">{category.name}</span>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto">
      <table className="selector-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Syntax</th>
            <th>Example</th>
            <th>Description</th>
            <th>Browser Support</th>
          </tr>
        </thead>
        <tbody>
          {propertyCategories.map(category => (
            <React.Fragment key={category.id}>
              {renderCategoryHeader(category)}
              
              {expandedCategories[category.id] && category.properties.map(property => (
                <tr 
                  key={property.id}
                  id={property.id}
                  ref={el => propertyRefs.current[property.id] = el}
                  className="transition-colors duration-300"
                >
                  <td>
                    <div className="font-mono font-medium text-primary">
                      {property.name}
                    </div>
                  </td>
                  <td>
                    <div className="font-mono text-sm">
                      {property.syntax}
                    </div>
                  </td>
                  <td className="w-1/3">
                    <PropertyExample property={property} />
                  </td>
                  <td>
                    <p>{property.description}</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {property.browsers.map((browser, i) => (
                        <Badge key={i} variant="outline">
                          {browser}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
