
import React from 'react';
import { CssProperty } from '@/types/properties';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="p-1 bg-muted/20">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-4">
          <iframe 
            className="preview-iframe min-h-[100px] w-full border-0"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <style>${property.example.css}</style>
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
              <h5 className="text-xs font-semibold mb-1">HTML</h5>
              <pre className="text-xs bg-gray-50 rounded p-2 overflow-x-auto">{property.example.html}</pre>
            </div>
            <div>
              <h5 className="text-xs font-semibold mb-1">CSS</h5>
              <pre className="text-xs bg-gray-50 rounded p-2 overflow-x-auto">{property.example.css}</pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyExample;
