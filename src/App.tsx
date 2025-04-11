
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import NotFound from './pages/NotFound';

// Analytics component for page views
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    const path = location.pathname;
    console.log('Page view:', path);
    
    // You can add more sophisticated analytics here
  }, [location]);

  return null;
};

function App() {
  return (
    <Router basename="/css-explorer">
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:propertyId" element={<PropertyDetails />} />
          <Route path="selectors" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
