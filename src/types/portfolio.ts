export interface FileItem {
  id: string;
  name: string;
  type: 'file';
  extension: string;
  content: string;
}

export interface FolderItem {
  id: string;
  name: string;
  type: 'folder';
  children: (FileItem | FolderItem)[];
}

export type TreeItem = FileItem | FolderItem;

export interface OpenTab {
  id: string;
  name: string;
  content: string;
  type: 'file' | 'qa';
}
