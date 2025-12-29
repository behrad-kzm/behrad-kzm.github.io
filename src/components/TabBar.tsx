import { X, Menu } from 'lucide-react';
import { OpenTab } from '@/types/portfolio';
import FileIcon from './FileIcon';

interface TabBarProps {
  tabs: OpenTab[];
  activeTabId: string;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onSidebarToggle?: () => void;
}

const TabBar = ({ tabs, activeTabId, onTabClick, onTabClose, onSidebarToggle }: TabBarProps) => {
  const getFileExtension = (filename: string) => {
    const parts = filename.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  };

  return (
    <div className="flex items-center bg-vscode-tabInactive border-b border-vscode-border pl-2.5">
      {/* Mobile hamburger button */}
      {onSidebarToggle && (
        <button
          className="md:hidden flex-shrink-0 px-2.5 py-2 hover:bg-vscode-hover transition-colors flex items-center justify-center"
          onClick={onSidebarToggle}
        >
          <Menu className="w-5 h-5" />
        </button>
      )}
      
      {/* Tabs container with horizontal scroll */}
      <div className="flex items-center overflow-x-auto flex-1 px-2.5 pt-2.5">
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
    </div>
  );
};

export default TabBar;
