
import React from 'react';
import TableOfContents, { TOCItem } from './TableOfContents';
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
  
  // Convert propertyCategories to the format expected by TableOfContents
  const items: TOCItem[] = propertyCategories.map(category => ({
    id: category.id,
    name: category.name,
    children: category.properties.map(property => ({
      id: property.id,
      name: property.name
    }))
  }));

  return (
    <TableOfContents
      title={t('general.properties')}
      items={items}
      expandedCategories={expandedCategories}
      toggleCategory={toggleCategory}
      onSelectItem={onSelectProperty}
    />
  );
};

export default PropertyTableOfContents;
