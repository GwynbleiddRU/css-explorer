
import React, { useState, useEffect, useMemo } from 'react';
import { CssProperty } from '@/types/properties';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  const { t } = useTranslation();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [displayHtml, setDisplayHtml] = useState('');
  const [displayCss, setDisplayCss] = useState('');
  
  // Initialize code from property.example
  useEffect(() => {
    setHtmlCode(property.example.html);
    setCssCode(property.example.css);
    setDisplayHtml(property.example.html);
    setDisplayCss(property.example.css);
  }, [property.example]);
  
  // Format HTML with smarter indentation
  const formattedHtml = useMemo(() => {
    if (!htmlCode) return '';
    
    // Use a more sophisticated approach with regex
    const formatted = htmlCode
      // Add newline for block-level elements
      .replace(/<(div|p|h[1-6]|ul|ol|li|table|tr|td|section|article|header|footer|nav|form|fieldset)([^>]*)>/gi, '\n<$1$2>')
      // Keep self-closing and inline elements on same line
      .replace(/<(img|input|br|hr|span|a|strong|em|b|i|small|code)([^>]*?)\/?\s*>/gi, '<$1$2>')
      // Format the document
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');
    
    // Apply indentation
    let result = '';
    let indent = 0;
    const lines = formatted.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if line contains a closing tag but not an opening tag (pure closing tag line)
      const isClosingTagLine = /<\/[^>]+>/.test(line) && !/<[^\/][^>]*>/.test(line);
      
      // Check if line contains both opening and closing of the same tag (self-contained)
      const selfContained = /<([a-z]+)[^>]*>.*?<\/\1>/i.test(line);
      
      // Adjust indent before adding the line
      if (isClosingTagLine && !selfContained) {
        indent = Math.max(0, indent - 1);
      }
      
      // Add the line with proper indentation
      result += '  '.repeat(indent) + line + '\n';
      
      // Adjust indent for next line based on tags in current line
      if (/<[^\/][^>]*>/.test(line) && !/<\/[^>]+>/.test(line) && !/<[^>]+\/>/.test(line)) {
        // Line has opening tag but no closing tag
        indent++;
      }
    }
    
    return result.trim();
  }, [htmlCode]);
  
  // Format CSS with indentation
  const formattedCss = useMemo(() => {
    if (!cssCode) return '';
    
    return cssCode
      .replace(/\s*{\s*/g, ' {\n  ') // Add newline and indent after opening brace
      .replace(/;\s*/g, ';\n  ')     // Add newline and indent after semicolons
      .replace(/\s*}\s*/g, '\n}\n')  // Add newlines around closing brace
      .replace(/}\n(\w)/g, '}\n\n$1') // Add extra newline between rules
      .replace(/\n  \n/g, '\n')       // Remove empty indented lines
      .replace(/\n  }/g, '\n}');      // Remove indent before closing brace
  }, [cssCode]);

  const compileCode = () => {
    setDisplayHtml(htmlCode);
    setDisplayCss(cssCode);
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Preview Section */}
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
                onChange={(e) => setHtmlCode(e.target.value)}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                onChange={(e) => setCssCode(e.target.value)}
                className="text-gray-100 p-3 text-sm font-mono w-full h-[120px] bg-transparent border border-gray-700 leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Run Button */}
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

export default PropertyExample;
