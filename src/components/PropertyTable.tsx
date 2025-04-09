
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { propertyCategories } from '@/data/propertyData';
import PropertyExample from './PropertyExample';
import { PropertyCategory } from '@/types/properties';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

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
    <TableRow key={`${category.id}-header`} className="category-row">
      <TableCell colSpan={4} className="p-0">
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
      </TableCell>
    </TableRow>
  );

  return (
    <div className="w-full overflow-auto">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Syntax</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Browser Support</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {propertyCategories.map(category => (
            <React.Fragment key={category.id}>
              {renderCategoryHeader(category)}
              
              {expandedCategories[category.id] && category.properties.map(property => (
                <React.Fragment key={property.id}>
                  <TableRow 
                    key={property.id}
                    id={property.id}
                    ref={el => propertyRefs.current[property.id] = el}
                    className="property-row transition-colors duration-300"
                  >
                    <TableCell className="align-top">
                      <div className="font-mono font-medium text-primary">
                        {property.name}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="font-mono text-sm whitespace-pre-wrap">
                        {property.syntax}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <p className="whitespace-pre-wrap">{property.description}</p>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-wrap gap-1">
                        {property.browsers.map((browser, i) => (
                          <Badge key={i} variant="outline">
                            {browser}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="example-row">
                    <TableCell colSpan={4} className="px-4 pt-0 pb-4">
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-2">Example</h4>
                        <PropertyExample property={property} />
                      </div>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyTable;
