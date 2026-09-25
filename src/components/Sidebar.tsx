import { Files, MessageCircleQuestion, UserCheck, Building2 } from 'lucide-react';
import { TreeItem, FileItem } from '@/types/portfolio';
import { qaData } from '@/data/qaData';
import FileTree from './FileTree';

interface SidebarProps {
  tree: TreeItem[];
  onFileClick: (file: FileItem) => void;
  onQAClick: (qaId: string) => void;
  selectedFileId?: string;
  isOpen: boolean;
  onToggle: () => void;
  activeSection: 'explorer' | 'qa';
  onSectionChange: (section: 'explorer' | 'qa') => void;
}

type SidebarSection = 'explorer' | 'qa';

const Sidebar = ({ 
  tree, 
  onFileClick, 
  onQAClick, 
  selectedFileId, 
  isOpen, 
  onToggle,
  activeSection,
  onSectionChange
}: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={`fixed md:static top-0 left-0 h-full bg-vscode-sidebar border-r border-vscode-border flex z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Icon Navigation */}
        <div className="w-12 bg-[hsl(220,13%,9%)] border-r border-vscode-border flex flex-col items-center py-2">
          <button
            onClick={() => onSectionChange('explorer')}
            className={`w-12 h-12 flex items-center justify-center transition-colors ${
              activeSection === 'explorer'
                ? 'text-white border-l-2 border-primary bg-vscode-hover'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Explorer"
          >
            <Files className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => onSectionChange('qa')}
            className={`w-12 h-12 flex items-center justify-center transition-colors ${
              activeSection === 'qa'
                ? 'text-white border-l-2 border-primary bg-vscode-hover'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Q&A"
          >
            <MessageCircleQuestion className="w-6 h-6" />
          </button>
        </div>

        {/* Content Panel */}
        <div
          className="bg-vscode-sidebar"
          style={{ width: '288px' }}
        >
          {/* Explorer Section */}
          {activeSection === 'explorer' && (
            <>
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
            </>
          )}

          {/* Q&A Section */}
          {activeSection === 'qa' && (
            <>
              <div className="flex items-center justify-between px-4 py-3 border-b border-vscode-border">
                <span className="text-xs font-medium uppercase text-muted-foreground tracking-wider">
                  Q&A Categories
                </span>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-49px)]">
                {qaData.map((item) => {
                  const isHr = item.category === 'hr';
                  const Icon = isHr ? UserCheck : Building2;
                  return (
                    <button
                      key={item.id}
                      className="w-full flex items-start gap-3 px-4 py-3 hover:bg-vscode-hover transition-colors border-b border-vscode-border/50"
                      onClick={() => {
                        onQAClick(item.id);
                        if (window.innerWidth < 768) {
                          onToggle();
                        }
                      }}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded flex items-center justify-center ${
                          isHr ? 'bg-blue-500/10' : 'bg-green-500/10'
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isHr ? 'text-blue-400' : 'text-green-400'}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
