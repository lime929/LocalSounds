import { useState, useEffect } from 'react';

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

  return (
    <div>
      <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
    </div>
  );
}
