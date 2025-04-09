
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const NavBar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    if (path === '/properties') {
      return location.pathname === '/' || location.pathname === '/properties';
    }
    return location.pathname === path;
  };

  const NavLinks = () => (
    <>
      <NavigationMenuItem>
        <Link to="/properties">
          <NavigationMenuLink className={cn(
            navigationMenuTriggerStyle(),
            isActive('/properties') && 'bg-accent text-accent-foreground'
          )}>
            CSS Properties
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/selectors">
          <NavigationMenuLink className={cn(
            navigationMenuTriggerStyle(),
            isActive('/selectors') && 'bg-accent text-accent-foreground'
          )}>
            CSS Selectors
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            CSS Explorer
          </Link>

          {/* Desktop navigation */}
          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

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
    </header>
  );
};

export default NavBar;
