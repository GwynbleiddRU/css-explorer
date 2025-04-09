
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { selectorCategories } from '@/data/selectorData';
import SelectorExample from './SelectorExample';
import { SelectorCategory } from '@/types/selectors';
import { Badge } from '@/components/ui/badge';

interface SelectorTableProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  activeSelectorId: string | null;
}

const SelectorTable: React.FC<SelectorTableProps> = ({ 
  expandedCategories, 
  toggleCategory,
  activeSelectorId
}) => {
  const selectorRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

  useEffect(() => {
    if (activeSelectorId && selectorRefs.current[activeSelectorId]) {
      selectorRefs.current[activeSelectorId]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Highlight effect
      const row = selectorRefs.current[activeSelectorId];
      if (row) {
        row.classList.add('bg-secondary/30');
        setTimeout(() => {
          row.classList.remove('bg-secondary/30');
        }, 1500);
      }
    }
  }, [activeSelectorId]);

  // Find which category contains the active selector
  useEffect(() => {
    if (activeSelectorId) {
      // Find the category that contains the active selector
      const category = selectorCategories.find(cat => 
        cat.selectors.some(sel => sel.id === activeSelectorId)
      );
      
      if (category && !expandedCategories[category.id]) {
        toggleCategory(category.id);
      }
    }
  }, [activeSelectorId, expandedCategories, toggleCategory]);

  const renderCategoryHeader = (category: SelectorCategory) => (
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
            <th>Selector</th>
            <th>Parameters</th>
            <th>Example</th>
            <th>Description</th>
            <th>Supported Platforms</th>
          </tr>
        </thead>
        <tbody>
          {selectorCategories.map(category => (
            <React.Fragment key={category.id}>
              {renderCategoryHeader(category)}
              
              {expandedCategories[category.id] && category.selectors.map(selector => (
                <tr 
                  key={selector.id}
                  id={selector.id}
                  ref={el => selectorRefs.current[selector.id] = el}
                  className="transition-colors duration-300"
                >
                  <td>
                    <div className="font-mono font-medium text-primary">
                      {selector.name}
                    </div>
                  </td>
                  <td>
                    <div className="font-mono text-sm">
                      {selector.parameters}
                    </div>
                  </td>
                  <td className="w-1/3">
                    <SelectorExample selector={selector} />
                  </td>
                  <td>
                    <p>{selector.description}</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {selector.platforms.map((platform, i) => (
                        <Badge key={i} variant="outline">
                          {platform}
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

export default SelectorTable;
