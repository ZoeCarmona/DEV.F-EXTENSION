import './Message.css';

function Message({ type, text }) {
  if (!text) return null;

  const messagesTypes = {
    success: 'msg-success',
    hint: 'msg-hint',
    error: 'msg-error'
  };

  return (
    <div className={`game-message ${messagesTypes[type] || ''}`}>
      <p>{text}</p>
    </div>
  );
}

export default Message;