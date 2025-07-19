'use client';

export function TypingIndicator() {
  return (
    <div className="flex w-full mb-4 justify-start">
      <div className="flex max-w-[80%] items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-semibold">
          🕉️
        </div>
        <div className="rounded-2xl px-4 py-3 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}