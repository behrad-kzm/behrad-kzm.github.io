import { X } from 'lucide-react';
import { OpenTab } from '@/types/portfolio';
import FileIcon from './FileIcon';

interface TabBarProps {
  tabs: OpenTab[];
  activeTabId: string;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

const TabBar = ({ tabs, activeTabId, onTabClick, onTabClose }: TabBarProps) => {
  const getFileExtension = (filename: string) => {
    const parts = filename.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  };

  return (
    <div className="flex items-center bg-vscode-tabInactive border-b border-vscode-border overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        const extension = getFileExtension(tab.name);
        
        return (
          <div
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 border-r border-vscode-border cursor-pointer transition-colors min-w-fit ${
              isActive 
                ? 'bg-vscode-editor border-t-2 border-t-primary' 
                : 'bg-vscode-tabInactive hover:bg-vscode-hover'
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            <FileIcon type="file" extension={extension} className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-sm text-foreground whitespace-nowrap">{tab.name}</span>
            <button
              className="hover:bg-vscode-hover rounded p-0.5 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
