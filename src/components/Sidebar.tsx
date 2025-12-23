import { Menu, X } from 'lucide-react';
import { TreeItem, FileItem } from '@/types/portfolio';
import FileTree from './FileTree';

interface SidebarProps {
  tree: TreeItem[];
  onFileClick: (file: FileItem) => void;
  selectedFileId?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ tree, onFileClick, selectedFileId, isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-vscode-sidebar p-2 rounded"
        onClick={onToggle}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-vscode-sidebar border-r border-vscode-border transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ width: '280px' }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-vscode-border">
          <span className="text-xs font-medium uppercase text-muted-foreground tracking-wider">
            Explorer
          </span>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-49px)]">
          <FileTree 
            items={tree} 
            onFileClick={(file) => {
              onFileClick(file);
              if (window.innerWidth < 768) {
                onToggle();
              }
            }}
            selectedFileId={selectedFileId}
          />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;
