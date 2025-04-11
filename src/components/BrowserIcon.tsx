
import React from 'react';
import { Chrome, Globe, Firefox, Safari, PanelLeft } from 'lucide-react';
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
        return <Firefox className="h-4 w-4" />;
      case 'safari':
        return <Safari className="h-4 w-4" />;
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
