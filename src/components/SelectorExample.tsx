
import React, { useState, useEffect } from 'react';
import { CssSelector } from '@/types/selectors';
import { useTranslation } from 'react-i18next';
import { Play, RotateCcw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatHtml, formatCss } from '@/utils/codeFormatters';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SelectorExampleProps {
  selector: CssSelector;
}

const SelectorExample: React.FC<SelectorExampleProps> = ({ selector }) => {
  const { t } = useTranslation();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [displayHtml, setDisplayHtml] = useState('');
  const [displayCss, setDisplayCss] = useState('');
  const [originalHtml, setOriginalHtml] = useState('');
  const [originalCss, setOriginalCss] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [codeChanged, setCodeChanged] = useState(false);
  
  useEffect(() => {
    // Format and store original code for reset functionality
    const formattedHtml = formatHtml(selector.example.html);
    const formattedCss = formatCss(selector.example.css);
    
    setOriginalHtml(formattedHtml);
    setOriginalCss(formattedCss);
    
    // Set current code
    setHtmlCode(formattedHtml);
    setCssCode(formattedCss);
    setDisplayHtml(selector.example.html);
    setDisplayCss(selector.example.css);
    setCodeChanged(false);
  }, [selector.example]);
  
  const validateCode = () => {
    // Basic syntax validation
    try {
      // Check for unclosed HTML tags
      const unclosedTagRegex = /<([a-z][a-z0-9]*)[^>]*(?<!\/|<\1)>(?![^<]*<\/\1>)/i;
      if (unclosedTagRegex.test(htmlCode)) {
        throw new Error(t('errors.unclosedHtmlTag', { defaultValue: 'Unclosed HTML tag detected' }));
      }

      // Check for unclosed CSS braces
      const openBraces = (cssCode.match(/{/g) || []).length;
      const closeBraces = (cssCode.match(/}/g) || []).length;
      if (openBraces !== closeBraces) {
        throw new Error(t('errors.unclosedCssBraces', { defaultValue: 'Unclosed CSS braces detected' }));
      }

      // Check for unterminated CSS rules
      if (/[^;{}]\s*$/.test(cssCode.replace(/\/\*[\s\S]*?\*\//g, '').trim()) && cssCode.trim() !== '') {
        throw new Error(t('errors.unterminatedCssRule', { defaultValue: 'Unterminated CSS rule detected' }));
      }

      setError(null);
      return true;
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(t('errors.unknownError', { defaultValue: 'An unknown error occurred' }));
      }
      return false;
    }
  };
  
  const compileCode = () => {
    if (validateCode()) {
      setDisplayHtml(htmlCode);
      setDisplayCss(cssCode);
      setCodeChanged(false);
    }
  };
  
  const resetCode = () => {
    setHtmlCode(originalHtml);
    setCssCode(originalCss);
    setDisplayHtml(selector.example.html);
    setDisplayCss(selector.example.css);
    setError(null);
    setCodeChanged(true); // Enable the run button after reset
  };

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value);
    setCodeChanged(true); // Enable the run button when code changes
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(e.target.value);
    setCodeChanged(true); // Enable the run button when code changes
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="space-y-2 flex flex-col h-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">{t('general.preview')}</h3>
          </div>
          <iframe
            className="preview-iframe w-full flex-grow min-h-[200px] border rounded"
            srcDoc={`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <style>
                  body {
                    padding: 16px;
                    font-family: system-ui, sans-serif;
                    background-color: white;
                    color: black;
                  }
                  ${displayCss}
                </style>
              </head>
              <body>
                ${displayHtml}
              </body>
              </html>
            `}
          />
        </div>
        
        <div className="space-y-4">
          <div className="code-editor-block w-full">
            <div className="flex items-center justify-between bg-gray-800 text-white px-3 py-1 rounded-t text-xs">
              <span className="font-medium">{t('general.html')}</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative bg-gray-900 rounded-b w-full">
              <textarea
                value={htmlCode}
                onChange={handleHtmlChange}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                spellCheck="false"
                wrap="off"
              />
            </div>
          </div>
          
          <div className="code-editor-block w-full">
            <div className="flex items-center justify-between bg-gray-800 text-white px-3 py-1 rounded-t text-xs">
              <span className="font-medium">{t('general.css')}</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative bg-gray-900 rounded-b w-full">
              <textarea
                value={cssCode}
                onChange={handleCssChange}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                spellCheck="false"
                wrap="off"
              />
            </div>
          </div>
          
          {/* Control Buttons */}
          <div className="flex justify-end space-x-2">
            <Button 
              onClick={resetCode} 
              size="sm" 
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              {t('general.reset')}
            </Button>
            <Button 
              onClick={compileCode} 
              size="sm" 
              className="flex items-center gap-2"
              disabled={!codeChanged}
            >
              <Play className="h-4 w-4" />
              {t('general.run')}
            </Button>
          </div>
          
          {/* Error message - Moved to bottom with better alignment */}
          {error && (
            <Alert variant="destructive" className="py-2 mt-2">
              <div className="flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </div>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectorExample;
