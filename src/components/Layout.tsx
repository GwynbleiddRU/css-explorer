
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const Layout: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow overflow-visible">
        <Outlet />
      </main>
      <footer className="border-t py-6 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CSS Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
