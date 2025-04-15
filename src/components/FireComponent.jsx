import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import fireAnimation from '../assets/fire.json';

export default function FireComponent({ id, x, y, onClick }) {
  const [scale, setScale] = useState(0.1);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => Math.min(prev + 0.01, 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (!hasClicked) {
      setHasClicked(true);
      onClick(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `scale(${scale})`,
        transformOrigin: 'center bottom',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        zIndex: 5,
      }}
    >
      <Lottie animationData={fireAnimation} loop autoplay />
    </div>
  );
}
