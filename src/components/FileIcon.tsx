import { FileCode, FileText, Folder, FolderOpen } from 'lucide-react';

interface FileIconProps {
  type: 'file' | 'folder';
  extension?: string;
  isOpen?: boolean;
  className?: string;
}

const FileIcon = ({ type, extension, isOpen, className = "w-4 h-4" }: FileIconProps) => {
  if (type === 'folder') {
    return isOpen ? (
      <FolderOpen className={`${className} text-file-folder`} />
    ) : (
      <Folder className={`${className} text-file-folder`} />
    );
  }

  // File type icons with colors
  switch (extension) {
    case 'ts':
      return <FileCode className={`${className} text-file-typescript`} />;
    case 'swift':
      return <FileCode className={`${className} text-file-swift`} />;
    case 'cpp':
      return <FileCode className={`${className} text-file-cpp`} />;
    case 'md':
      return <FileText className={`${className} text-file-document`} />;
    default:
      return <FileCode className={`${className} text-muted-foreground`} />;
  }
};

export default FileIcon;
