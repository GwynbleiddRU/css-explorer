
import React, { useState, useEffect } from 'react';
import { CssProperty } from '@/types/properties';
import { useTranslation } from 'react-i18next';
import { Play, RotateCcw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatHtml, formatCss } from '@/utils/codeFormatters';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import postcss from 'postcss';
import safeParser from 'postcss-safe-parser';
import { HtmlValidate } from 'html-validate';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  const { t } = useTranslation();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [displayHtml, setDisplayHtml] = useState('');
  const [displayCss, setDisplayCss] = useState('');
  const [originalHtml, setOriginalHtml] = useState('');
  const [originalCss, setOriginalCss] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [codeChanged, setCodeChanged] = useState(false);
  
  // Initialize code from property.example
  useEffect(() => {
    // Format and store original code for reset functionality
    const formattedHtml = formatHtml(property.example.html);
    const formattedCss = formatCss(property.example.css);
    
    setOriginalHtml(formattedHtml);
    setOriginalCss(formattedCss);
    
    // Set current code
    setHtmlCode(formattedHtml);
    setCssCode(formattedCss);
    setDisplayHtml(property.example.html);
    setDisplayCss(property.example.css);
    setCodeChanged(false);
  }, [property.example]);

  const htmlvalidate = new HtmlValidate();
  
  const validateCode = async () => {
    try {
      const report = htmlvalidate.validateString(htmlCode);
      if (!(await report).valid) {
        const msg = (await report).results[0]?.messages[0];
        throw new Error(
          t('errors.invalidHtml', {
            defaultValue: `Invalid HTML: ${msg?.message ?? 'Unknown HTML error'} (line ${msg?.line}, col ${msg?.column})`
          })
        );
      }
  
      // --- Stricter CSS checks before postcss-safe-parser ---
      const cssWithoutComments = cssCode.replace(/\/\*[\s\S]*?\*\//g, '').trim();
  
      const openBraces = (cssWithoutComments.match(/{/g) || []).length;
      const closeBraces = (cssWithoutComments.match(/}/g) || []).length;
      if (openBraces !== closeBraces) {
        throw new Error(t('errors.unclosedCssBraces', { defaultValue: 'Unclosed CSS braces detected' }));
      }
  
      // Check for unterminated rules
      const rules = cssWithoutComments.split('}').filter(Boolean);
      for (const rule of rules) {
        const body = rule.split('{')[1];
        if (body && !body.trim().endsWith(';')) {
          throw new Error(t('errors.unterminatedCssRule', { defaultValue: 'Unterminated CSS rule detected' }));
        }
      }
  
      // Safe parse via PostCSS
      try {
        await postcss().process(cssCode, { parser: safeParser });
      } catch (err: any) {
        const message = err?.reason || err?.message || '';
        throw new Error(message);
      }
  
      setError(null);
      return true;
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : t('errors.unknownError', { defaultValue: 'An unknown error occurred' })
      );
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
    setDisplayHtml(property.example.html);
    setDisplayCss(property.example.css);
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
        {/* Preview Section - Full height on desktop */}
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
        
        {/* Code Editor Section */}
        <div className="space-y-4">
          {/* HTML Editor */}
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
          
          {/* CSS Editor */}
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
        </div>
        {error && (
        <div className="col-span-full">
          <Alert variant="destructive" className="py-2 w-full">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
              <AlertDescription className="text-sm">{error}</AlertDescription>
            </div>
          </Alert>
        </div>
        )}
      </div>
    </div>
  );
};

export default PropertyExample;
