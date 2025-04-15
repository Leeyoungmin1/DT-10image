// 🔥 FireComponent.jsx
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import fireAnimation from '../assets/fire.json';

export default function FireComponent({ onClick, onMaxSize }) {
  const [scale, setScale] = useState(0.1);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => {
        const next = prev + 0.01;
        if (next >= 1) {
          clearInterval(interval);
          if (!hasClicked) {
            onMaxSize(); // ✅ 최대 크기 도달 시 ToastMessage 표시
          }
        }
        return next >= 1 ? 1 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onMaxSize, hasClicked]);

  const handleClick = () => {
    if (!hasClicked && scale < 1) {
      setHasClicked(true);
      onClick(); // ✅ 클릭 시 메시지 띄우기
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: '73%',
        top: '73%',
        transform: `translate(-50%, -100%) scale(${scale})`,
        transformOrigin: 'center bottom',
        width: '800px',
        height: '800px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <Lottie
        animationData={fireAnimation}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
