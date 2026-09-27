import { useEffect, useId, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'strict',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  flowchart: {
    curve: 'basis',
    padding: 16,
  },
  themeVariables: {
    darkMode: true,
    background: 'transparent',
    primaryColor: '#264f78',
    primaryTextColor: '#d4d4d4',
    primaryBorderColor: '#007acc',
    lineColor: '#858585',
    secondaryColor: '#252526',
    tertiaryColor: '#1e1e1e',
  },
});

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
  const reactId = useId().replace(/:/g, '');
  const [svg, setSvg] = useState('');

  useEffect(() => {
    let cancelled = false;
    const definition = chart.trim();
    if (!definition) return;

    mermaid
      .render(`mermaid-${reactId}`, definition)
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((error) => {
        if (!cancelled) {
          console.error(error);
          setSvg('');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (!svg) return null;

  return (
    <div
      className="my-6 overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
