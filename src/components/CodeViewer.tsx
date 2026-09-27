import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MarkdownPreview from './MarkdownPreview';

interface CodeViewerProps {
  content: string;
  filename: string;
  onInternalLinkClick?: (href: string) => void;
}

// Detect language from filename extension
const getLanguageFromFilename = (filename: string): string => {
  const ext = filename.split('.').pop()?.toLowerCase();
  const languageMap: Record<string, string> = {
    'ts': 'typescript',
    'tsx': 'typescript',
    'js': 'javascript',
    'jsx': 'javascript',
    'py': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'c': 'c',
    'cs': 'csharp',
    'go': 'go',
    'rs': 'rust',
    'swift': 'swift',
    'kt': 'kotlin',
    'rb': 'ruby',
    'php': 'php',
    'sh': 'bash',
    'bash': 'bash',
    'json': 'json',
    'yaml': 'yaml',
    'yml': 'yaml',
    'xml': 'xml',
    'html': 'html',
    'css': 'css',
    'scss': 'scss',
    'sql': 'sql',
    'md': 'markdown',
  };
  return languageMap[ext || ''] || 'typescript'; // default to typescript
};

const CodeViewer = ({ content, filename, onInternalLinkClick }: CodeViewerProps) => {
  const isMarkdown = filename.endsWith('.md');
  
  // If it's a markdown file, show preview
  if (isMarkdown) {
    return <MarkdownPreview content={content} onInternalLinkClick={onInternalLinkClick} />;
  }
  
  const language = getLanguageFromFilename(filename);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(mq.matches);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (isMobile) {
    return (
      <div className="h-full overflow-auto bg-vscode-editor">
        <pre className="code-viewer-mobile">{content}</pre>
      </div>
    );
  }

  return (
    <div className="h-full bg-vscode-editor overflow-auto">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
        }}
        lineNumberStyle={{
          minWidth: '3em',
          paddingRight: '1em',
          color: '#858585',
          userSelect: 'none',
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
