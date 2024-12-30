import { useState } from 'react';
import type { ScreenTimeData } from '../types';

export function useScreenTime() {
  const [screenTimeData] = useState<ScreenTimeData[]>([
    { date: '2024-03-10', minutes: 360, category: 'productive' },
    { date: '2024-03-10', minutes: 120, category: 'social' },
    { date: '2024-03-10', minutes: 90, category: 'entertainment' },
    { date: '2024-03-10', minutes: 45, category: 'other' },
  ]);

  const todayMinutes = screenTimeData
    .filter(d => d.date === '2024-03-10')
    .reduce((acc, curr) => acc + curr.minutes, 0);

  return { screenTimeData, todayMinutes };
}