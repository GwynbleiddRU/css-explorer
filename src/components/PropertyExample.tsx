
import React from 'react';
import { CssProperty } from '@/types/properties';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  const { t } = useTranslation();

  return (
    <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="p-1 bg-muted/20">
          <TabsTrigger value="preview">{t('general.preview')}</TabsTrigger>
          <TabsTrigger value="code">{t('general.code')}</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-4">
          <iframe 
            className="preview-iframe min-h-[100px] w-full border-0"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    /* Reset styles to prevent leaking styles from the parent document */
                    html, body, div, span, h1, h2, h3, h4, h5, h6, p, pre, a, code, img, ol, ul, li {
                      margin: 0;
                      padding: 0;
                      border: 0;
                      font-size: 100%;
                      font: inherit;
                      vertical-align: baseline;
                      box-sizing: border-box;
                    }
                    body {
                      padding: 16px;
                      font-family: system-ui, -apple-system, sans-serif;
                    }
                    /* Example specific CSS */
                    ${property.example.css}
                  </style>
                </head>
                <body>
                  <div class="preview-container" style="min-height: 80px; display: flex; align-items: center; justify-content: center;">
                    ${property.example.html}
                  </div>
                </body>
              </html>
            `}
            title="Property Example Preview"
          />
        </TabsContent>
        <TabsContent value="code" className="border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
              <h5 className="text-xs font-semibold mb-1">{t('general.html')}</h5>
              <pre className="text-xs bg-gray-50 dark:bg-gray-900 rounded p-2 overflow-x-auto">{property.example.html}</pre>
            </div>
            <div>
              <h5 className="text-xs font-semibold mb-1">{t('general.css')}</h5>
              <pre className="text-xs bg-gray-50 dark:bg-gray-900 rounded p-2 overflow-x-auto">{property.example.css}</pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyExample;
