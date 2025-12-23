import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { TreeItem, FileItem, FolderItem } from '@/types/portfolio';
import FileIcon from './FileIcon';

interface FileTreeProps {
  items: TreeItem[];
  onFileClick: (file: FileItem) => void;
  selectedFileId?: string;
}

const FileTree = ({ items, onFileClick, selectedFileId }: FileTreeProps) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <TreeNode 
          key={item.id} 
          item={item} 
          onFileClick={onFileClick}
          selectedFileId={selectedFileId}
        />
      ))}
    </div>
  );
};

interface TreeNodeProps {
  item: TreeItem;
  level?: number;
  onFileClick: (file: FileItem) => void;
  selectedFileId?: string;
}

const TreeNode = ({ item, level = 0, onFileClick, selectedFileId }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(true);

  if (item.type === 'folder') {
    const folder = item as FolderItem;
    return (
      <div>
        <div
          className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-vscode-hover transition-colors"
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          )}
          <FileIcon type="folder" isOpen={isOpen} />
          <span className="text-sm text-foreground ml-1">{folder.name}</span>
        </div>
        {isOpen && (
          <div>
            {folder.children.map((child) => (
              <TreeNode 
                key={child.id} 
                item={child} 
                level={level + 1} 
                onFileClick={onFileClick}
                selectedFileId={selectedFileId}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const file = item as FileItem;
  const isSelected = selectedFileId === file.id;
  
  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 cursor-pointer transition-colors ${
        isSelected ? 'bg-vscode-tabActive' : 'hover:bg-vscode-hover'
      }`}
      style={{ paddingLeft: `${level * 12 + 20}px` }}
      onClick={() => onFileClick(file)}
    >
      <FileIcon type="file" extension={file.extension} />
      <span className="text-sm text-foreground ml-1">{file.name}</span>
    </div>
  );
};

export default FileTree;
