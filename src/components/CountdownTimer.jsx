import { useState, useEffect } from 'react';
import eventBg from '../assets/event-bg.jpg';

export default function CountdownTimer({ eventDate }) {
  const getSecondsLeft = () => {
    const today = new Date();
    const seconds = Math.floor((eventDate - today) / 1000);
    return seconds > 0 ? seconds : 0;
  };

  const [secondsLeft, setSecondsLeft] = useState(getSecondsLeft());

  useEffect(() => {
    if (secondsLeft === 0) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const days = Math.floor(secondsLeft / (60 * 60 * 24));
  const hours = Math.floor((secondsLeft % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  // Format numbers to always show 2 digits
  const formatNumber = (num) => num < 10 ? `0${num}` : num;

  return (
    <div className="countdown-hero">
      <img 
        src={eventBg} 
        alt="Concert background" 
        className="countdown-bg" 
      />
      <div className="countdown-overlay">
        <div className="countdown-container">
          <div className="countdown-header">
            <h2>Next Event in:</h2>
            <p>Don't miss out on our upcoming event!</p>
          </div>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">{formatNumber(days)}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{formatNumber(hours)}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{formatNumber(minutes)}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-separator remove-item">:</div>
        <div className="countdown-item remove-item">
          <span className="countdown-number">{formatNumber(seconds)}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
