import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownPreviewProps {
  content: string;
  onInternalLinkClick?: (href: string) => void;
}

const MarkdownPreview = ({ content, onInternalLinkClick }: MarkdownPreviewProps) => {
  return (
    <div className="h-full overflow-auto bg-vscode-editor">
      <div className="max-w-4xl mx-auto p-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => {
              // Special handling for the main title to keep "S. Behrad Kazemi" together
              const childText = String(children);
              if (childText.includes("It's Me,")) {
                return (
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground border-b border-vscode-border pb-4">
                    It's Me, <span className="inline-block">S. Behrad Kazemi</span>
                  </h1>
                );
              }
              return (
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground border-b border-vscode-border pb-4">
                  {children}
                </h1>
              );
            },
            h2: ({ children }) => (
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-foreground border-b border-vscode-border pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-3 text-foreground">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-base md:text-lg lg:text-xl font-semibold mt-4 mb-2 text-foreground">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed text-justify">
                {children}
              </p>
            ),
            a: ({ href, children, className }) => {
              // Don't apply default link styles to custom social links
              if (className?.includes('social-link')) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {children}
                  </a>
                );
              }
              
              // Handle internal action links
              if (href?.startsWith('#action:')) {
                return (
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onInternalLinkClick) {
                        onInternalLinkClick(href);
                      }
                    }}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {children}
                  </a>
                );
              }

              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {children}
                </a>
              );
            },
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90 text-sm md:text-base lg:text-lg">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90 text-sm md:text-base lg:text-lg">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="ml-4">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-vscode-tabInactive px-2 py-0.5 rounded text-xs md:text-sm text-primary font-mono">
                    {children}
                  </code>
                );
              }
              return (
                <code className="block bg-vscode-tabInactive p-4 rounded my-4 overflow-x-auto text-xs md:text-sm font-mono text-foreground">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-vscode-tabInactive p-4 rounded my-4 overflow-x-auto">
                {children}
              </pre>
            ),
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className="w-48 sm:w-64 md:max-w-xs mx-auto my-6 rounded-full"
              />
            ),
            hr: () => (
              <hr className="my-8 border-vscode-border" />
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border border-vscode-border sm:table">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="block sm:table-header-group">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="block sm:table-row-group">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="block sm:table-row mb-2 sm:mb-0">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="border border-vscode-border px-4 py-2 text-left font-semibold text-foreground block sm:table-cell text-sm md:text-base lg:text-lg">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-vscode-border px-4 py-2 text-foreground/90 block sm:table-cell text-sm md:text-base lg:text-lg">
                {children}
              </td>
            ),
            strong: ({ children }) => (
              <strong className="text-white font-bold">
                {children}
              </strong>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
