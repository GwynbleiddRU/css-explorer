
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { selectorCategories } from '@/data/selectorData';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  onSelectSelector: (selectorId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  expandedCategories, 
  toggleCategory,
  onSelectSelector
}) => {
  return (
    <div className="table-of-contents mb-8">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <div className="space-y-2">
        {selectorCategories.map(category => (
          <div key={category.id} className="space-y-1">
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
              <span className="text-sm text-muted-foreground ml-2">
                ({category.selectors.length})
              </span>
            </div>
            
            {expandedCategories[category.id] && (
              <div className="pl-6 space-y-1">
                {category.selectors.map(selector => (
                  <div 
                    key={selector.id}
                    className="pl-2 py-1 hover:bg-muted rounded cursor-pointer flex items-center"
                    onClick={() => onSelectSelector(selector.id)}
                  >
                    <span className="text-sm">{selector.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground font-mono">
                      {selector.parameters}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
