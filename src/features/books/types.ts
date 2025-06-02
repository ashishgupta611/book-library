export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  read: boolean;
}

export type BookFilter = 'all' | 'read' | 'unread';