import MarkdownPreview from './MarkdownPreview';

interface CodeViewerProps {
  content: string;
  filename: string;
}

const CodeViewer = ({ content, filename }: CodeViewerProps) => {
  const isMarkdown = filename.endsWith('.md');
  
  // If it's a markdown file, show preview
  if (isMarkdown) {
    return <MarkdownPreview content={content} />;
  }
  
  // Otherwise show code with line numbers
  const lines = content.split('\n');
  
  return (
    <div className="flex h-full bg-vscode-editor overflow-hidden">
      {/* Line numbers */}
      <div className="bg-vscode-editor text-muted-foreground text-right pr-4 pl-4 py-4 select-none border-r border-vscode-border">
        {lines.map((_, index) => (
          <div key={index} className="leading-6 text-xs">
            {index + 1}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto">
        <pre className="p-4 text-sm leading-6 text-foreground">
          <code className="font-mono">{content}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeViewer;
