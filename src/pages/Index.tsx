
import React, { useState, useEffect } from 'react';
import { selectorCategories } from '@/data/selectorData';
import SearchBar from '@/components/SearchBar';
import TableOfContents from '@/components/TableOfContents';
import SelectorTable from '@/components/SelectorTable';

const Index = () => {
  // State for tracking expanded categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activeSelectorId, setActiveSelectorId] = useState<string | null>(null);

  // Initialize expanded categories from localStorage or defaults
  useEffect(() => {
    const savedState = localStorage.getItem('expandedCategories');
    if (savedState) {
      try {
        setExpandedCategories(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved category state:', e);
        initializeDefaultExpanded();
      }
    } else {
      initializeDefaultExpanded();
    }
  }, []);

  // Save expanded state to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(expandedCategories).length > 0) {
      localStorage.setItem('expandedCategories', JSON.stringify(expandedCategories));
    }
  }, [expandedCategories]);

  const initializeDefaultExpanded = () => {
    const defaults: Record<string, boolean> = {};
    selectorCategories.forEach(category => {
      defaults[category.id] = category.id === 'basic'; // Only expand basic by default
    });
    setExpandedCategories(defaults);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSelectSelector = (selectorId: string) => {
    setActiveSelectorId(selectorId);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">CSS Selector Explorer</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive reference guide for CSS selectors with interactive examples
        </p>
      </header>

      <SearchBar onSelectSelector={handleSelectSelector} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <TableOfContents 
            expandedCategories={expandedCategories} 
            toggleCategory={toggleCategory}
            onSelectSelector={handleSelectSelector}
          />
        </div>
        
        <div className="lg:col-span-3">
          <SelectorTable 
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            activeSelectorId={activeSelectorId}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
