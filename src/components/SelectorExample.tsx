import React, { useState, useMemo } from 'react';
import { CssSelector } from '@/types/selectors';
import { useTranslation } from 'react-i18next';

interface SelectorExampleProps {
  selector: CssSelector;
}

const SelectorExample: React.FC<SelectorExampleProps> = ({ selector }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('preview');
  const isDarkMode = document.documentElement.classList.contains('dark');

  const formattedHtml = useMemo(() => {
    if (!selector.example.html) return '';
    return selector.example.html
      .replace(/<(div|p|h[1-6]|ul|ol|li|table|tr|td|section|article|header|footer|nav|form|fieldset)([^>]*)>/gi, '\n<$1$2>')
      .replace(/<(img|input|br|hr|span|a|strong|em|b|i|small|code)([^>]*?)\/?\s*>/gi, '<$1$2>')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n')
      .replace(/^/gm, '  ');
  }, [selector.example.html]);

  const formattedCss = useMemo(() => {
    if (!selector.example.css) return '';
    return selector.example.css
      .replace(/\s*{\s*/g, ' {\n  ')
      .replace(/;\s*/g, ';\n  ')
      .replace(/\s*}\s*/g, '\n}')
      .replace(/\n  \n/g, '\n')
      .replace(/\n  }/g, '\n}');
  }, [selector.example.css]);

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
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

      {activeTab === 'preview' && (
        <div className="p-4">
          <iframe
            className="preview-iframe w-full min-h-[100px] border rounded"
            srcDoc={`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <style>
                  body {
                    padding: 16px;
                    font-family: system-ui, sans-serif;
                  }
                  ${selector.example.css}
                </style>
              </head>
              <body>
                ${selector.example.html}
              </body>
              </html>
            `}
          />
        </div>
      )}

      {activeTab === 'code' && (
        <div className="p-4 space-y-4 max-w-full">
          {/* HTML */}
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

          {/* CSS */}
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

export default SelectorExample;
