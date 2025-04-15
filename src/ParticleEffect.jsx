import React, { useEffect, useState } from 'react';

function ParticleEffect({ image, count = 20 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 20,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
    }));
    setParticles(newParticles);
  }, [image]);

  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {particles.map((p) => (
        <img
          key={p.id}
          src={image}
          alt="particle"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatUp ${p.duration}s ease-in ${p.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.6; }
          100% { transform: translateY(-200px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default ParticleEffect;
