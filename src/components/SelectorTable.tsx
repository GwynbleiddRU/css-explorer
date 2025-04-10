
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { selectorCategories } from '@/data/selectorData';
import SelectorExample from './SelectorExample';
import { SelectorCategory } from '@/types/selectors';
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
  const { t } = useTranslation();

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
            <TableHead>{t('general.selector')}</TableHead>
            <TableHead>{t('general.parameters')}</TableHead>
            <TableHead>{t('general.description')}</TableHead>
            <TableHead>{t('general.supportedPlatforms')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectorCategories.map(category => (
            <React.Fragment key={category.id}>
              {renderCategoryHeader(category)}
              
              {expandedCategories[category.id] && category.selectors.map(selector => (
                <React.Fragment key={selector.id}>
                  <TableRow 
                    id={selector.id}
                    ref={el => selectorRefs.current[selector.id] = el}
                    className="transition-colors duration-300"
                  >
                    <TableCell className="align-top">
                      <div className="font-mono font-medium text-primary">
                        {selector.name}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="font-mono text-sm whitespace-pre-wrap">
                        {selector.parameters}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <p className="whitespace-pre-wrap">{selector.description}</p>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-wrap gap-2">
                        {selector.platforms.map((platform, i) => (
                          <BrowserIcon key={i} browser={platform} />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="example-row">
                    <TableCell colSpan={4} className="px-4 pt-0 pb-4">
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-2">{t('general.example')}</h4>
                        <SelectorExample selector={selector} />
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

export default SelectorTable;
