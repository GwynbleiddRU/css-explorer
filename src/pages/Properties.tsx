
import React, { useState, useEffect } from 'react';
import { propertyCategories } from '@/data/propertyData';
import PropertySearchBar from '@/components/PropertySearchBar';
import PropertyTableOfContents from '@/components/PropertyTableOfContents';
import PropertyTable from '@/components/PropertyTable';

const Properties = () => {
  // State for tracking expanded categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activePropertyId, setActivePropertyId] = useState<string | null>(null);

  // Initialize expanded categories from localStorage or defaults
  useEffect(() => {
    const savedState = localStorage.getItem('expandedPropertyCategories');
    if (savedState) {
      try {
        setExpandedCategories(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved property category state:', e);
        initializeDefaultExpanded();
      }
    } else {
      initializeDefaultExpanded();
    }
  }, []);

  // Save expanded state to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(expandedCategories).length > 0) {
      localStorage.setItem('expandedPropertyCategories', JSON.stringify(expandedCategories));
    }
  }, [expandedCategories]);

  const initializeDefaultExpanded = () => {
    const defaults: Record<string, boolean> = {};
    propertyCategories.forEach(category => {
      defaults[category.id] = category.id === 'layout'; // Only expand layout by default
    });
    setExpandedCategories(defaults);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSelectProperty = (propertyId: string) => {
    setActivePropertyId(propertyId);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <PropertySearchBar onSelectProperty={handleSelectProperty} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <PropertyTableOfContents 
            expandedCategories={expandedCategories} 
            toggleCategory={toggleCategory}
            onSelectProperty={handleSelectProperty}
          />
        </div>
        
        <div className="lg:col-span-3">
          <PropertyTable 
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            activePropertyId={activePropertyId}
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
