
import React, { useState, useEffect, useRef } from 'react';
import { propertyCategories } from '@/data/propertyData';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

interface PropertySearchBarProps {
  onSelectProperty: (propertyId: string) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ onSelectProperty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<Array<{ id: string; name: string; category: string }>>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results: Array<{ id: string; name: string; category: string }> = [];
      
      propertyCategories.forEach(category => {
        category.properties.forEach(property => {
          if (property.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({
              id: property.id,
              name: property.name,
              category: category.name
            });
          }
        });
      });
      
      setFilteredProperties(results);
      setIsDropdownOpen(results.length > 0);
    } else {
      setFilteredProperties([]);
      setIsDropdownOpen(false);
    }
  }, [searchTerm]);

  const handlePropertySelect = (propertyId: string) => {
    onSelectProperty(propertyId);
    setSearchTerm('');
    setIsDropdownOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filteredProperties.length > 0) {
      handlePropertySelect(filteredProperties[0].id);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={t('search.cssProperties')}
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (filteredProperties.length > 0) {
              setIsDropdownOpen(true);
            }
          }}
        />
      </div>
      
      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-border overflow-hidden">
          <ul className="py-1">
            {filteredProperties.map((property) => (
              <li
                key={property.id}
                className="px-4 py-2 hover:bg-muted cursor-pointer flex justify-between"
                onClick={() => handlePropertySelect(property.id)}
              >
                <span className="font-mono">{property.name}</span>
                <span className="text-muted-foreground text-sm">{property.category}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertySearchBar;
