// app/components/MessageBubble.tsx

import React from 'react';

interface MessageBubbleProps {
  message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div
      style={{
        padding: '10px',
        background: '#f1f1f1',
        borderRadius: '5px',
        display: 'inline-block',
        maxWidth: '80%',
        margin: '10px 0',
      }}
    >
      {message}
    </div>
  );
};

export default MessageBubble;
