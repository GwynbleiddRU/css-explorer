
import React, { useState, useEffect } from 'react';
import { CssSelector } from '@/types/selectors';
import { cn } from '@/lib/utils';

interface SelectorExampleProps {
  selector: CssSelector;
}

const SelectorExample: React.FC<SelectorExampleProps> = ({ selector }) => {
  const [renderedHtml, setRenderedHtml] = useState<string>('');

  useEffect(() => {
    // Combine CSS and HTML for the live example
    const styleTag = `<style>${selector.example.css}</style>`;
    setRenderedHtml(styleTag + selector.example.html);
  }, [selector]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <h4 className="text-sm font-semibold mb-2">HTML</h4>
        <pre className="code-block">{selector.example.html}</pre>
        
        <h4 className="text-sm font-semibold mt-4 mb-2">CSS</h4>
        <pre className="code-block">{selector.example.css}</pre>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold mb-2">Live Example</h4>
        <div className="example-container">
          <div
            className="rendered-example min-h-[150px]"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectorExample;
