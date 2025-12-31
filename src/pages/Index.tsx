import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { FileItem, OpenTab } from '@/types/portfolio';
import { portfolioTree } from '@/data/portfolioData';
import { qaData } from '@/data/qaData';
import Sidebar from '@/components/Sidebar';
import TabBar from '@/components/TabBar';
import CodeViewer from '@/components/CodeViewer';
import QAViewer from '@/components/QAViewer';
import StatusBar from '@/components/StatusBar';

const Index = () => {
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Open README.md by default on mount
  useEffect(() => {
    const readmeFile = portfolioTree.find(item => item.type === 'file' && item.name === 'README.md');
    if (readmeFile && readmeFile.type === 'file') {
      handleFileClick(readmeFile as FileItem);
    }
  }, []);

  const handleFileClick = (file: FileItem) => {
    // Check if tab is already open
    const existingTab = openTabs.find(tab => tab.id === file.id);
    
    if (existingTab) {
      setActiveTabId(file.id);
    } else {
      const newTab: OpenTab = {
        id: file.id,
        name: file.name,
        content: file.content,
        type: 'file'
      };
      setOpenTabs([...openTabs, newTab]);
      setActiveTabId(file.id);
    }
  };

  const handleQAClick = (qaId: string) => {
    // Check if tab is already open
    const existingTab = openTabs.find(tab => tab.id === qaId);
    
    if (existingTab) {
      setActiveTabId(qaId);
    } else {
      const qaItem = qaData.find(item => item.id === qaId);
      if (qaItem) {
        const newTab: OpenTab = {
          id: qaItem.id,
          name: qaItem.title,
          content: '', // Not used for QA tabs
          type: 'qa'
        };
        setOpenTabs([...openTabs, newTab]);
        setActiveTabId(qaItem.id);
      }
    }
  };

  const handleTabClose = (tabId: string) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId);
    setOpenTabs(newTabs);
    
    // If closing active tab, switch to another tab
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    } else if (newTabs.length === 0) {
      setActiveTabId('');
    }
  };

  const activeTab = openTabs.find(tab => tab.id === activeTabId);
  const activeFile = activeTab ? {
    id: activeTab.id,
    name: activeTab.name,
    type: 'file' as const,
    extension: activeTab.name.split('.').pop() || '',
    content: activeTab.content
  } : undefined;

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          tree={portfolioTree}
          onFileClick={handleFileClick}
          onQAClick={handleQAClick}
          selectedFileId={activeTabId}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="flex-1 flex flex-col min-w-0">
          {openTabs.length > 0 ? (
            <>
              <TabBar
                tabs={openTabs}
                activeTabId={activeTabId}
                onTabClick={setActiveTabId}
                onTabClose={handleTabClose}
                onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
              />
              
              {activeTab && (
                <div className="flex-1 overflow-hidden">
                  {activeTab.type === 'file' ? (
                    <CodeViewer content={activeTab.content} filename={activeTab.name} />
                  ) : (
                    <QAViewer qaItem={qaData.find(item => item.id === activeTab.id)!} />
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-vscode-editor relative">
              <button
                className="absolute top-4 left-4 md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-vscode-hover rounded-md transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">Portfolio Explorer</h2>
                <p className="text-muted-foreground">Select a file from the sidebar to view its contents</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default Index;
