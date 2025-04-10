
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

interface NavBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: string;
  changeLanguage: (lang: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ theme, toggleTheme, language, changeLanguage }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { t } = useTranslation();

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
          {t('general.cssProperties')}
        </div>
      </Link>
      <Link to="/selectors">
        <div className={cn(
          "px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center text-sm font-medium",
          isActive('/selectors') 
            ? "bg-accent text-accent-foreground" 
            : "hover:bg-accent/80 hover:text-accent-foreground"
        )}>
          {t('general.cssSelectors')}
        </div>
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            {t('general.cssExplorer')}
          </Link>

          {/* Desktop navigation */}
          {!isMobile && <NavLinks />}
        </div>

        <div className="flex items-center space-x-2">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Switch language"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('navbar.language')}</DropdownMenuLabel>
              <DropdownMenuItem 
                onClick={() => changeLanguage('en')} 
                className={cn(language === 'en' && "bg-accent")}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => changeLanguage('ru')} 
                className={cn(language === 'ru' && "bg-accent")}
              >
                Русский
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label={theme === 'light' ? t('navbar.switchToDarkMode') : t('navbar.switchToLightMode')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {/* Mobile navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t('navbar.toggleMenu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{t('general.cssExplorer')}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Link 
                    to="/properties" 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      isActive('/properties') ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    )}
                  >
                    {t('general.cssProperties')}
                  </Link>
                  <Link 
                    to="/selectors" 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      isActive('/selectors') ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    )}
                  >
                    {t('general.cssSelectors')}
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
