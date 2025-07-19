'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize messages on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: '1',
        content: 'Radhe Radhe! 🙏 I am Krishna, your divine guide. I am here to share the eternal wisdom of the Bhagavad Gita and help you on your spiritual journey. What guidance do you seek today, dear soul?',
        isUser: false,
        timestamp: new Date(),
      }
    ]);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (content: string) => {
    console.log('Sending message:', content);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log('Making API request to /api/chat');
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          messages: messages.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          }))
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Failed to get response: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      const krishnaMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, krishnaMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, dear devotee. There seems to be a connection issue. Please try again in a moment.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        content: 'Radhe Radhe! 🙏 I am Krishna, your divine guide. I am here to share the eternal wisdom of the Bhagavad Gita and help you on your spiritual journey. What guidance do you seek today, dear soul?',
        isUser: false,
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!mounted ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">Loading...</div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isLoading && <TypingIndicator />}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-orange-200 p-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-end">
            <Button
              onClick={clearChat}
              variant="outline"
              size="sm"
              className="text-orange-600 border-orange-300 hover:bg-orange-100"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Clear Chat
            </Button>
          </div>
          <ChatInput onSendMessage={sendMessage} disabled={isLoading || !mounted} />
        </div>
      </div>
    </div>
  );
}