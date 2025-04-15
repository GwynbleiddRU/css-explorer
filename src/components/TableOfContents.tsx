import React from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export interface TOCItem {
  id: string;
  name: string;
  children: {
    id: string;
    name: string;
    parameters?: string;
  }[];
}

interface TableOfContentsProps {
  title?: string;
  items: TOCItem[];
  expandedCategories: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  onSelectItem: (itemId: string) => void;
  itemClass?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  title,
  items, 
  expandedCategories, 
  toggleCategory,
  onSelectItem,
  itemClass = ""
}) => {
  const { t } = useTranslation();
  
  const hasExpandedCategories = Object.values(expandedCategories).some(value => value);

  const handleCloseAll = () => {
    Object.keys(expandedCategories).forEach(categoryId => {
      if (expandedCategories[categoryId]) {
        toggleCategory(categoryId);
      }
    });
  };
  
  return (
    <div className="table-of-contents bg-card mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title || t('general.tableOfContents')}</h2>
        {hasExpandedCategories && (
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            onClick={handleCloseAll}
          >
            <X className="h-4 w-4 mr-1" />
            {t('general.closeAll')}
          </Button>
        )}
      </div>
      <div className="space-y-2">
        {items.map(category => (
          <div key={category.id} className="space-y-1">
            <div 
              className="category-header flex items-center cursor-pointer hover:text-primary"
              onClick={() => toggleCategory(category.id)}
            >
              {expandedCategories[category.id] ? (
                <ChevronDown className="h-4 w-4 mr-2" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2" />
              )}
              <span className="font-medium">{category.name}</span>
              <span className="text-sm text-muted-foreground ml-2">
                ({category.children.length})
              </span>
            </div>
            
            {expandedCategories[category.id] && (
              <div className="pl-6 space-y-1">
                {category.children.map(item => (
                  <div 
                    key={item.id}
                    className={`pl-2 py-1 hover:bg-muted rounded cursor-pointer flex items-center ${itemClass}`}
                    onClick={() => onSelectItem(item.id)}
                  >
                    <span className="text-sm">{item.name}</span>
                    {item.parameters && (
                      <span className="ml-2 text-xs text-muted-foreground font-mono">
                        {item.parameters}
                      </span>
                    )}
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
