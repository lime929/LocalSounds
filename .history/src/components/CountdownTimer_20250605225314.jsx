import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const getSecondsLeft = () => {
    const now = new Date();
    const seconds = Math.floor((targetDate - now) / 1000);
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

  return (
    <div>
      <p>{days}d {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}
s