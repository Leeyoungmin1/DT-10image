import { useEffect, useRef } from 'react';

const ParticleEffect = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !images?.length) return;

    const particles = [];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('img');

      // 🎲 랜덤 이미지 선택
      const randomImg = images[Math.floor(Math.random() * images.length)];
      particle.src = randomImg;

      // 🎲 랜덤 사이즈 (20px ~ 50px)
      const size = Math.random() * 30 + 20;

      // 🎲 랜덤 위치 - 화면 위쪽부터 아래쪽까지 넓게
      const top = Math.random() * 100; // 0~100%
      const leftOffset = Math.random() * 200; // 시작 위치 다양화

      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${top}%`;
      particle.style.left = `-${leftOffset * 10}px`; // 왼쪽에서 다양하게 시작
      particle.style.opacity = Math.random() * 0.5 + 0.5; // 0.5~1
      particle.style.pointerEvents = 'none';
      particle.style.animation = `floatRight ${
        5 + Math.random() * 3
      }s linear infinite`;
      particle.style.zIndex = 0;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => container.removeChild(p));
    };
  }, [images]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticleEffect;
