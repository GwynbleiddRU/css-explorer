
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow overflow-auto">
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
