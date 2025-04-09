
import React from 'react';
import { CssSelector } from '@/types/selectors';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SelectorExampleProps {
  selector: CssSelector;
}

const SelectorExample: React.FC<SelectorExampleProps> = ({ selector }) => {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="p-1 bg-muted/20">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-4">
          <div 
            className="preview-container min-h-[100px] flex items-center justify-center"
            dangerouslySetInnerHTML={{ 
              __html: `<style>${selector.example.css}</style>${selector.example.html}` 
            }}
          />
        </TabsContent>
        <TabsContent value="code" className="border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
              <h5 className="text-xs font-semibold mb-1">HTML</h5>
              <pre className="text-xs bg-gray-50 rounded p-2 overflow-x-auto">{selector.example.html}</pre>
            </div>
            <div>
              <h5 className="text-xs font-semibold mb-1">CSS</h5>
              <pre className="text-xs bg-gray-50 rounded p-2 overflow-x-auto">{selector.example.css}</pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelectorExample;
