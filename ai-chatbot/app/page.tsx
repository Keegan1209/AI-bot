// app/page.tsx
import ChatInterface from './components/ChatInterface';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Your AI Chatbot!</h1>
      <p>Start chatting with the bot below:</p>
      
      {/* Use the reusable ChatInterface component */}
      <ChatInterface />
    </div>
  );
}
