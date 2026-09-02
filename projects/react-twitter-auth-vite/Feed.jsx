import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Feed.css';

function Feed() {
  const { user } = useAuth();
  const [tweets, setTweets] = useState(() => {
    const saved = localStorage.getItem('twitter_posts');
    return saved ? JSON.parse(saved) : [
      { id: 1, author: 'devf_admin', content: '¡Bienvenidos al clon de Twitter con autenticación en React!', timestamp: 'Hace 2 horas' }
    ];
  });
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    localStorage.setItem('twitter_posts', JSON.stringify(tweets));
  }, [tweets]);

  const handlePostTweet = (e) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    const tweetItem = {
      id: Date.now(),
      author: user.username,
      content: newContent.trim(),
      timestamp: 'Justo ahora'
    };

    setTweets([tweetItem, ...tweets]);
    setNewContent('');
  };

  const handleDeleteTweet = (id, author) => {
    if (author !== user.username) return;
    setTweets(tweets.filter(t => t.id !== id));
  };

  return (
    <div className="feed-container">
      <div className="tweet-box">
        <h3>¡Hola, @{user.username}! ¿Qué está pasando?</h3>
        <form onSubmit={handlePostTweet}>
          <textarea
            rows="3"
            placeholder="Escribe tu tuit aquí..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            maxLength="280"
          ></textarea>
          <div className="tweet-box-footer">
            <span className="char-counter">{280 - newContent.length}</span>
            <button type="submit" className="tweet-btn">Tuitear</button>
          </div>
        </form>
      </div>

      <div className="timeline">
        {tweets.length === 0 ? (
          <p className="empty-feed">No hay tuits aún. ¡Sé el primero en publicar!</p>
        ) : (
          tweets.map(tweet => (
            <div key={tweet.id} className="tweet-card">
              <div className="tweet-header">
                <span className="tweet-author">@{tweet.author}</span>
                <span className="tweet-time">{tweet.timestamp}</span>
              </div>
              <p className="tweet-content">{tweet.content}</p>
              {tweet.author === user.username && (
                <button 
                  onClick={() => handleDeleteTweet(tweet.id, tweet.author)} 
                  className="delete-tweet-btn"
                  title="Eliminar tuit"
                >
                  🗑️ Eliminar
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feed;