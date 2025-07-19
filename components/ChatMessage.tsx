'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format time consistently
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  return (
    <div className={cn('flex w-full mb-4', isUser ? 'justify-end' : 'justify-start')}>
      <div className={cn('flex max-w-[80%] items-start space-x-2', isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row')}>
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold',
          isUser ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-orange-500 to-orange-600'
        )}>
          {isUser ? 'You' : '🕉️'}
        </div>
        <div className={cn(
          'rounded-2xl px-4 py-3 shadow-md',
          isUser 
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
            : 'bg-gradient-to-r from-orange-50 to-amber-50 text-gray-800 border border-orange-200'
        )}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
          <p className={cn(
            'text-xs mt-2 opacity-70',
            isUser ? 'text-blue-100' : 'text-gray-500'
          )}>
            {mounted ? formatTime(timestamp) : ''}
          </p>
        </div>
      </div>
    </div>
  );
}