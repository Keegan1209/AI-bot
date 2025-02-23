// app/components/ChatInterface.tsx
'use client';  // <-- Add this to indicate it's a client-side component

import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

const ChatInterface = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>Chat with the Bot</h2>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
            <MessageBubble message={msg} />
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px', marginLeft: '10px' }}>Send</button>
    </div>
  );
};

export default ChatInterface;
