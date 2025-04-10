
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { useTranslation } from 'react-i18next';

const Layout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={i18n.language} 
        changeLanguage={changeLanguage} 
      />
      <main className="flex-grow overflow-visible">
        <Outlet />
      </main>
      <footer className="border-t py-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
