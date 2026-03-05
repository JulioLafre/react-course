import {useAutoScroll} from '../hooks/useAutoScroll.js'
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(
        ({ message, sender, id }) => (
          <ChatMessage
            key={id}
            message={message}
            sender={sender}
          />
        )
      )}
    </div>
  )
};

export default ChatMessages;