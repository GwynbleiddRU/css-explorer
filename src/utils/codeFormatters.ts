
/**
 * Utility functions for formatting code
 */

/**
 * Format HTML code with proper indentation and line breaks
 * @param html The HTML code to format
 * @returns Formatted HTML code
 */
export const formatHtml = (html: string): string => {
  if (!html.trim()) return '';
  
  // Replace multiple spaces with a single space
  let formattedHtml = html.replace(/\s+/g, ' ').trim();
  
  // Process tags
  let result = '';
  let indentLevel = 0;
  let inTag = false;
  let inContent = false;
  let lastChar = '';
  let buffer = '';
  
  for (let i = 0; i < formattedHtml.length; i++) {
    const char = formattedHtml[i];
    
    if (char === '<' && formattedHtml[i + 1] !== '/') {
      // Opening tag
      if (inContent && buffer.trim()) {
        result += buffer.trim();
        buffer = '';
      }
      
      inTag = true;
      inContent = false;
      
      if (buffer.trim()) {
        result += buffer;
        buffer = '';
      }
      
      result += '\n' + ' '.repeat(indentLevel * 2);
      indentLevel++;
      buffer += char;
    } else if (char === '<' && formattedHtml[i + 1] === '/') {
      // Closing tag
      inTag = true;
      inContent = false;
      indentLevel--;
      
      if (buffer.trim()) {
        result += buffer.trim();
        buffer = '';
      }
      
      // Only add a new line if the previous character wasn't a closing tag
      if (lastChar !== '>') {
        result += '\n' + ' '.repeat(indentLevel * 2);
      }
      buffer += char;
    } else if (char === '>' && inTag) {
      // End of tag
      inTag = false;
      buffer += char;
      
      const hasChildren = formattedHtml.indexOf('</', i) !== formattedHtml.indexOf('<', i);
      
      // Self-closing or void elements
      if (buffer.includes('/>') || !hasChildren) {
        indentLevel--;
      }
      
      result += buffer;
      buffer = '';
      inContent = true;
      
      // If it's a void element or self-closing tag
      if (buffer.includes('/>') || !hasChildren) {
        inContent = false;
      }
    } else {
      buffer += char;
    }
    
    lastChar = char;
  }
  
  result += buffer;
  
  // Clean up any extra line breaks and spaces
  result = result.replace(/^\s+/gm, match => ' '.repeat(match.length > 2 ? match.length - 2 : match.length));
  
  return result.trim();
};

/**
 * Format CSS code with proper indentation and line breaks
 * @param css The CSS code to format
 * @returns Formatted CSS code
 */
export const formatCss = (css: string): string => {
  if (!css.trim()) return '';
  
  // Replace all whitespace with a single space
  let formattedCss = css.replace(/\s+/g, ' ').trim();
  
  // Add line break after each closing brace and semicolon
  formattedCss = formattedCss.replace(/;/g, ';\n');
  formattedCss = formattedCss.replace(/{/g, '{\n');
  formattedCss = formattedCss.replace(/}/g, '}\n');
  
  // Add indentation
  const lines = formattedCss.split('\n');
  let indentLevel = 0;
  const indentedLines = lines.map(line => {
    line = line.trim();
    if (!line) return '';
    
    if (line.includes('}')) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    const indentedLine = ' '.repeat(indentLevel * 2) + line;
    
    if (line.includes('{')) {
      indentLevel++;
    }
    
    return indentedLine;
  });
  
  return indentedLines.filter(line => line.trim()).join('\n');
};
