
import React from 'react';
import { Chrome, Globe } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface BrowserIconProps {
  browser: string;
}

const BrowserIcon: React.FC<BrowserIconProps> = ({ browser }) => {
  // Parse browser name and version
  const parts = browser.split(' ');
  const browserName = parts[0].toLowerCase();
  const version = parts.length > 1 ? parts[1] : '';
  
  const getBrowserIcon = () => {
    switch (browserName) {
      case 'chrome':
        return <Chrome className="h-4 w-4" />;
      case 'firefox':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
            <path d="M12 7a7 7 0 0 0-7 7c0 4 3 7 7 7s7-3 7-7a7 7 0 0 0-7-7z" />
          </svg>
        );
      case 'safari':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M14.5 9.5 19 4M4.21 12.02l5.74 2.54M12.61 20.79l2.54-5.74" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        );
      case 'edge':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a8 8 0 0 0-8.48-8.48 8.93 8.93 0 0 0-7.53 3.55 8 8 0 0 0 0 9.8 8.93 8.93 0 0 0 7.53 3.55 8 8 0 0 0 8.48-8.48"/>
            <path d="M5.3 10.16h4.8a8.3 8.3 0 0 0 4.3 4.3v4.8"/>
          </svg>
        );
      case 'opera':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="8" /></svg>;
      case 'ie':
      case 'internet':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.5 9h5M8 12h8m-6.5 3h5" /></svg>;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger className="flex items-center gap-1">
        {getBrowserIcon()}
        {version && <span className="text-xs">{version}+</span>}
      </TooltipTrigger>
      <TooltipContent>
        <p>{browser}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default BrowserIcon;
