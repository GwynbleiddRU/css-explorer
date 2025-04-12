
import React, { useState, useMemo } from 'react';
import { CssProperty } from '@/types/properties';
import { useTranslation } from 'react-i18next';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('preview');
  
  // Format HTML with smarter indentation
  const formattedHtml = useMemo(() => {
    if (!property.example.html) return '';
    
    // Use a more sophisticated approach with regex
    const formatted = property.example.html
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
  }, [property.example.html]);
  
  // Format CSS with indentation
  const formattedCss = useMemo(() => {
    if (!property.example.css) return '';
    
    return property.example.css
      .replace(/\s*{\s*/g, ' {\n  ') // Add newline and indent after opening brace
      .replace(/;\s*/g, ';\n  ')     // Add newline and indent after semicolons
      .replace(/\s*}\s*/g, '\n}\n')  // Add newlines around closing brace
      .replace(/}\n(\w)/g, '}\n\n$1') // Add extra newline between rules
      .replace(/\n  \n/g, '\n')       // Remove empty indented lines
      .replace(/\n  }/g, '\n}');      // Remove indent before closing brace
  }, [property.example.css]);

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
      {/* Custom Tab Header */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 px-4 text-center text-sm font-medium ${
            activeTab === 'preview' 
              ? 'bg-white dark:bg-gray-700 border-b-2 border-primary' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
          }`}
        >
          {t('general.preview')}
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 py-2 px-4 text-center text-sm font-medium ${
            activeTab === 'code' 
              ? 'bg-white dark:bg-gray-700 border-b-2 border-primary' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
          }`}
        >
          {t('general.code')}
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'preview' && (
        <div className="p-4">
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
                  ${property.example.css}
                </style>
              </head>
              <body>
                ${property.example.html}
              </body>
              </html>
            `}
          />
        </div>
      )}
      
      {activeTab === 'code' && (
        <div className="p-4 space-y-4 max-w-full">
          {/* HTML Code Block */}
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
              <pre className="text-gray-100 p-3 text-sm font-mono overflow-x-auto border border-gray-700 leading-relaxed max-w-full">
                <code>{formattedHtml}</code>
              </pre>
            </div>
          </div>
          
          {/* CSS Code Block */}
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
              <pre className="text-gray-100 p-3 text-sm font-mono overflow-x-auto border border-gray-700 leading-relaxed max-w-full">
                <code>{formattedCss}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyExample;
