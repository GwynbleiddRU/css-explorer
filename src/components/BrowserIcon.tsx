
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
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></svg>;
      case 'safari':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /></svg>;
      case 'edge':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 3" /></svg>;
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
