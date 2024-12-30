export interface ScreenTimeData {
  date: string;
  minutes: number;
  category: 'productive' | 'social' | 'entertainment' | 'other';
}

export interface Break {
  id: string;
  time: string;
  completed: boolean;
  type: 'meditation' | 'stretch' | 'walk' | 'eye-rest';
}