export interface QAItem {
  id: string;
  category: 'books' | 'technical' | 'teamwork' | 'challenges';
  title: string;
  subtitle: string;
  description: string;
  lastUpdate: string;
  icon: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const qaData: QAItem[] = [];

