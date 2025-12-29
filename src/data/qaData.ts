export interface QAItem {
  id: string;
  category: 'hr' | 'technical' | 'teamwork' | 'challenges';
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

export const qaData: QAItem[] = [
  {
    id: 'hr-questions',
    category: 'hr',
    title: 'HR Questions',
    subtitle: 'Behavioral & situational questions',
    description: 'In this section I\'m going to answer some of the most asked questions in the interviews.',
    lastUpdate: 'Jan 2026',
    icon: '👔',
    questions: [
      {
        question: 'Are you willing to relocate/travel?',
        answer: 'Yes, I am open to relocation if the role and team are a good fit. I am also comfortable with occasional travel when it supports collaboration and project needs.'
      },
      {
        question: 'What is the most significant achievement in your career?',
        answer: 'One of my most significant achievements was leading the redesign of a core backend service that had become a bottleneck as the product scaled. More importantly, it made the system easier for the team to maintain and extend, which had a lasting impact beyond the initial delivery.'
      },
      {
        question: 'Can you describe a challenging work situation and how you overcame it?',
        answer: 'We faced intermittent production issues that were hard to reproduce. I improved observability, isolated the root cause, and refactored the affected service, which resolved the issue and improved system reliability.'
      },
      {
        question: 'How do you handle stress and pressure?',
        answer: 'I handle pressure by prioritizing clearly, communicating early, and breaking problems into manageable steps. I focus on predictable delivery and maintaining a sustainable pace rather than reacting emotionally to urgency.'
      }
    ]
  }
];

