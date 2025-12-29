import { QAItem } from '@/data/qaData';

interface QAViewerProps {
  qaItem: QAItem;
}

const QAViewer = ({ qaItem }: QAViewerProps) => {
  return (
    <div className="h-full overflow-auto bg-vscode-editor">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-8 pb-6 border-b border-vscode-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">{qaItem.icon}</div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{qaItem.title}</h1>
              <p className="text-lg text-muted-foreground mb-3">{qaItem.subtitle}</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">{qaItem.description}</p>
              <p className="text-xs text-muted-foreground">Last update: {qaItem.lastUpdate}</p>
            </div>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="space-y-6">
          {qaItem.questions.map((qa, index) => (
            <div key={index} className="pb-6 border-b border-vscode-border/50 last:border-0">
              <div className="mb-3">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">HR:</span>
                <h3 className="text-lg font-medium text-white mt-1">{qa.question}</h3>
              </div>
              <div>
                <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">Me:</span>
                <p className="text-foreground/90 leading-relaxed mt-1 text-justify">{qa.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAViewer;

