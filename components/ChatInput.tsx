'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted, input:', input, 'disabled:', disabled);
    if (input.trim() && !disabled) {
      console.log('Calling onSendMessage with:', input.trim());
      onSendMessage(input.trim());
      setInput('');
    } else {
      console.log('Form submission blocked - input empty or disabled');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Krishna for guidance..."
        disabled={disabled}
        className="flex-1 border-orange-200 focus:border-orange-400 focus:ring-orange-200"
      />
      <Button 
        type="submit" 
        disabled={!input.trim() || disabled}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}