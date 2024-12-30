import { useState } from 'react';
import type { Break } from '../types';

export function useMindfulBreaks() {
  const [breaks, setBreaks] = useState<Break[]>([
    { id: '1', time: '10:00 AM', completed: false, type: 'meditation' },
    { id: '2', time: '11:30 AM', completed: false, type: 'stretch' },
    { id: '3', time: '2:00 PM', completed: false, type: 'walk' },
    { id: '4', time: '4:30 PM', completed: false, type: 'eye-rest' },
  ]);

  const handleCompleteBreak = (id: string) => {
    setBreaks(prev => prev.map(b => 
      b.id === id ? { ...b, completed: true } : b
    ));
  };

  return { breaks, handleCompleteBreak };
}