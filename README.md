# Krishna Wisdom 🕉️

A divine AI-powered chat application that provides spiritual guidance inspired by Lord Krishna and the teachings of the Bhagavad Gita.

## ✨ Features

- **Divine AI Chat**: Interact with an AI that embodies Lord Krishna's wisdom and compassion
- **Bhagavad Gita Integration**: Responses are inspired by the sacred teachings of the Bhagavad Gita
- **Beautiful UI**: Modern, spiritual-themed interface with Krishna's divine presence
- **Real-time Chat**: Smooth, responsive chat experience with typing indicators
- **Spiritual Guidance**: Get practical advice and wisdom for your spiritual journey

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom spiritual theme
- **UI Components**: Shadcn/ui components
- **AI Integration**: OpenAI GPT-3.5 Turbo
- **Icons**: Lucide React icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd krishna-wisdom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### OpenAI API Key
You'll need an OpenAI API key to use the chat functionality:
1. Sign up at [OpenAI](https://platform.openai.com/)
2. Create an API key
3. Add it to your `.env.local` file

## 🎨 Customization

### Themes
The application uses a spiritual color scheme:
- Blue gradients representing Krishna's divine nature
- Orange and amber accents for warmth and spirituality
- Custom Krishna avatar and spiritual imagery

### AI Personality
The AI is configured to respond as Lord Krishna with:
- Compassionate and wise responses
- References to Bhagavad Gita teachings
- Sanskrit terms with translations
- Practical spiritual guidance

## 📱 Usage

1. **Start a Conversation**: The app opens with a welcoming message from Krishna
2. **Ask Questions**: Seek guidance on spiritual matters, life challenges, or philosophical questions
3. **Receive Wisdom**: Get responses inspired by ancient wisdom and modern understanding
4. **Clear Chat**: Use the "Clear Chat" button to start fresh conversations

## 🏗️ Project Structure

```
krishna-wisdom/
├── app/
│   ├── api/chat/          # Chat API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Shadcn/ui components
│   ├── ChatContainer.tsx  # Main chat component
│   ├── ChatInput.tsx      # Message input
│   ├── ChatMessage.tsx    # Individual messages
│   └── TypingIndicator.tsx
├── public/
│   └── krishna-avatar.svg # Krishna avatar image
└── lib/
    └── utils.ts           # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the eternal wisdom of the Bhagavad Gita
- Built with love and devotion to Lord Krishna
- Thanks to the open source community for amazing tools and libraries

## 🌟 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting new features
- 🙏 Sharing with fellow spiritual seekers

---

**May the divine wisdom of Lord Krishna guide you on your spiritual journey! 🕉️** 