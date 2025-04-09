
import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { selectorCategories } from '@/data/selectorData';
import { CssSelector } from '@/types/selectors';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSelectSelector: (selectorId: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectSelector }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<CssSelector[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const allSelectors = selectorCategories.flatMap(category => category.selectors);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    if (newQuery.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = allSelectors.filter(selector => 
      selector.name.toLowerCase().includes(newQuery.toLowerCase()) ||
      selector.id.toLowerCase().includes(newQuery.toLowerCase())
    );
    
    setSuggestions(filtered);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleSelectSuggestion = (selector: CssSelector) => {
    setQuery(selector.name);
    setShowSuggestions(false);
    onSelectSelector(selector.id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
      handleSelectSuggestion(suggestions[selectedIndex]);
    } else if (suggestions.length > 0) {
      handleSelectSuggestion(suggestions[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;
    
    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }
    
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
    }
    
    // Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative flex-grow">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search CSS selectors (e.g. :hover, [attribute], etc.)"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            onFocus={() => { if (query && suggestions.length) setShowSuggestions(true); }}
            className="pr-10 text-base"
          />
          <Button 
            type="submit" 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-y-auto"
        >
          {suggestions.map((selector, index) => (
            <div
              key={selector.id}
              onClick={() => handleSelectSuggestion(selector)}
              className={cn(
                "p-3 cursor-pointer hover:bg-muted flex justify-between items-center",
                index === selectedIndex ? "bg-secondary/20" : ""
              )}
            >
              <div>
                <div className="font-medium">{selector.name}</div>
                <div className="text-sm text-muted-foreground">{selector.category}</div>
              </div>
              <div className="text-sm text-muted-foreground font-mono">{selector.parameters}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
