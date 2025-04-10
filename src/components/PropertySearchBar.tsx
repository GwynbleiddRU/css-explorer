
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { propertyCategories } from '@/data/propertyData';
import { useTranslation } from 'react-i18next';

interface PropertySearchBarProps {
  onSelectProperty: (propertyId: string) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ onSelectProperty }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ id: string; name: string; description: string }>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Close the dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const matchedProperties: Array<{ id: string; name: string; description: string }> = [];

    propertyCategories.forEach(category => {
      category.properties.forEach(property => {
        if (
          property.name.toLowerCase().includes(lowercaseQuery) ||
          property.description.toLowerCase().includes(lowercaseQuery)
        ) {
          matchedProperties.push({
            id: property.id,
            name: property.name,
            description: property.description
          });
        }
      });
    });

    setResults(matchedProperties.slice(0, 10)); // Limit to top 10 results
    setIsOpen(matchedProperties.length > 0);
  }, [query]);

  const handleSelect = (propertyId: string) => {
    onSelectProperty(propertyId);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.trim() !== '' && setIsOpen(true)}
          className="pl-10 bg-background"
          placeholder={t('search.searchProperties')}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-background border rounded-md shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            {results.map(property => (
              <div
                key={property.id}
                className="px-4 py-2 hover:bg-muted rounded-md cursor-pointer"
                onClick={() => handleSelect(property.id)}
              >
                <div className="font-medium">{property.name}</div>
                <div className="text-sm text-muted-foreground line-clamp-1">
                  {property.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertySearchBar;
