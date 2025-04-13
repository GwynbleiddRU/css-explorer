import React, { useState, useEffect, useMemo } from 'react';
import { CssSelector } from '@/types/selectors';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SelectorExampleProps {
  selector: CssSelector;
}

const SelectorExample: React.FC<SelectorExampleProps> = ({ selector }) => {
  const { t } = useTranslation();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [displayHtml, setDisplayHtml] = useState('');
  const [displayCss, setDisplayCss] = useState('');
  
  useEffect(() => {
    setHtmlCode(selector.example.html);
    setCssCode(selector.example.css);
    setDisplayHtml(selector.example.html);
    setDisplayCss(selector.example.css);
  }, [selector.example]);
  
  const formattedHtml = useMemo(() => {
    if (!htmlCode) return '';
    
    const formatted = htmlCode
      .replace(/<(div|p|h[1-6]|ul|ol|li|table|tr|td|section|article|header|footer|nav|form|fieldset)([^>]*)>/gi, '\n<$1$2>')
      .replace(/<(img|input|br|hr|span|a|strong|em|b|i|small|code)([^>]*?)\/?\s*>/gi, '<$1$2>')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');
    
    let result = '';
    let indent = 0;
    const lines = formatted.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      const isClosingTagLine = /<\/[^>]+>/.test(line) && !/<[^\/][^>]*>/.test(line);
      
      const selfContained = /<([a-z]+)[^>]*>.*?<\/\1>/i.test(line);
      
      if (isClosingTagLine && !selfContained) {
        indent = Math.max(0, indent - 1);
      }
      
      result += '  '.repeat(indent) + line + '\n';
      
      if (/<[^\/][^>]*>/.test(line) && !/<\/[^>]+>/.test(line) && !/<[^>]+\/>/.test(line)) {
        indent++;
      }
    }
    
    return result.trim();
  }, [htmlCode]);
  
  const formattedCss = useMemo(() => {
    if (!cssCode) return '';
    
    return cssCode
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/;\s*/g, ';\n  ')
      .replace(/\s*}\s*/g, '\n}')
      .replace(/\n  \n/g, '\n')
      .replace(/\n  }/g, '\n}');
  }, [cssCode]);
  
  const compileCode = () => {
    setDisplayHtml(htmlCode);
    setDisplayCss(cssCode);
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">{t('general.preview')}</h3>
          </div>
          <iframe
            className="preview-iframe w-full min-h-[200px] border rounded"
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
                onChange={(e) => setHtmlCode(e.target.value)}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                onChange={(e) => setCssCode(e.target.value)}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={compileCode} 
              size="sm" 
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {t('general.run')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorExample;
