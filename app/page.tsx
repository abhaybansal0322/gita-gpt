'use client';

import { ChatContainer } from '@/components/ChatContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-amber-50">
      <div className="container mx-auto max-w-4xl h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
          <div className="flex items-center justify-center space-x-4">
            {/* Krishna Image */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/krishna-avatar.jpg"
                alt="Lord Krishna"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Krishna Wisdom 🕉️</h1>
              <p className="text-blue-100 text-sm">
                Seek divine guidance from Lord Krishna and the teachings of Bhagavad Gita
              </p>
            </div>
          </div>
        </header>

        {/* Chat Container */}
        <div className="flex-1 bg-orange-50 shadow-xl border-x border-b border-orange-200">
          <ChatContainer />
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 text-center text-sm text-gray-600 border-t border-orange-200">
          <p>May this divine wisdom guide you on your spiritual journey 🙏</p>
        </footer>
      </div>
    </div>
  );
}