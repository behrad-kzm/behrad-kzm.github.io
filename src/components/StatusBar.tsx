import { FileItem } from '@/types/portfolio';

interface StatusBarProps {
  activeFile?: FileItem;
}

const StatusBar = ({ activeFile }: StatusBarProps) => {
  const getLanguage = (extension: string) => {
    switch (extension) {
      case 'ts':
        return 'TypeScript';
      case 'swift':
        return 'Swift';
      case 'cpp':
        return 'C++';
      case 'md':
        return 'Markdown';
      default:
        return 'Plain Text';
    }
  };

  const lines = activeFile?.content.split('\n').length || 0;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-1 flex items-center justify-between text-xs">
      <div className="flex items-center gap-4">
        <span>Portfolio v1.0.0</span>
        {activeFile && (
          <>
            <span>•</span>
            <span>{getLanguage(activeFile.extension)}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        {activeFile && (
          <>
            <span>Lines: {lines}</span>
            <span>UTF-8</span>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
