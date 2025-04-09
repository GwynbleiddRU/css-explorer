
import React, { useState } from 'react';
import { CssProperty } from '@/types/properties';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PropertyExampleProps {
  property: CssProperty;
}

const PropertyExample: React.FC<PropertyExampleProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<string>('preview');

  return (
    <div className="example-container">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-2">
          <TabsTrigger value="preview" onClick={() => setActiveTab('preview')}>Preview</TabsTrigger>
          <TabsTrigger value="code" onClick={() => setActiveTab('code')}>Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="min-h-[100px]">
          <div className="preview-container" dangerouslySetInnerHTML={{ 
            __html: `<style>${property.example.css}</style>${property.example.html}` 
          }} />
        </TabsContent>
        <TabsContent value="code">
          <div className="code-tabs">
            <div className="code-block">
              <h4 className="text-xs font-semibold mb-1">HTML</h4>
              <pre className="text-xs">{property.example.html}</pre>
            </div>
            <div className="code-block mt-2">
              <h4 className="text-xs font-semibold mb-1">CSS</h4>
              <pre className="text-xs">{property.example.css}</pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyExample;
