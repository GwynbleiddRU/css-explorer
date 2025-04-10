
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

interface NavBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    if (path === '/properties') {
      return location.pathname === '/' || location.pathname === '/properties';
    }
    return location.pathname === path;
  };

  const NavLinks = () => (
    <div className="flex items-center space-x-1">
      <Link to="/properties">
        <div className={cn(
          "px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center text-sm font-medium",
          isActive('/properties') 
            ? "bg-accent text-accent-foreground" 
            : "hover:bg-accent/80 hover:text-accent-foreground"
        )}>
          CSS Properties
        </div>
      </Link>
      <Link to="/selectors">
        <div className={cn(
          "px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center text-sm font-medium",
          isActive('/selectors') 
            ? "bg-accent text-accent-foreground" 
            : "hover:bg-accent/80 hover:text-accent-foreground"
        )}>
          CSS Selectors
        </div>
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            CSS Explorer
          </Link>

          {/* Desktop navigation */}
          {!isMobile && <NavLinks />}
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {/* Mobile navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>CSS Explorer</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Link 
                    to="/properties" 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      isActive('/properties') ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    )}
                  >
                    CSS Properties
                  </Link>
                  <Link 
                    to="/selectors" 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      isActive('/selectors') ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    )}
                  >
                    CSS Selectors
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
