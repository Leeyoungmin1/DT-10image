import { useState, useEffect } from 'react';
import FireComponent from './components/FireComponent';
import FireMessage from './components/FireMessage';
import ToastMessage from './components/ToastMessage';
import Navbar from './components/Navbar';
import bgImage from './assets/10img-bg-black.png';
import bgImageRed from './assets/10img-bg-red.png';
import bgImageBlue from './assets/10img-bg-blue.png';

function App() {
  const [fires, setFires] = useState([{ id: 1, x: '50%', y: '70%' }]);
  const [nextId, setNextId] = useState(2);
  const [showMessage, setShowMessage] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hasExceededLimit, setHasExceededLimit] = useState(false);
  const [backgroundType, setBackgroundType] = useState('default');

  // 🔥 불 클릭 시 제거 + 모두 제거 시 배경 변경 및 메시지 표시
  const handleFireClick = (id) => {
    setFires((prev) => {
      const updated = prev.filter((f) => f.id !== id);
      if (updated.length === 0) {
        setShowMessage(true);
        setBackgroundType('blue'); // 🟦 파란 배경 전환
      }
      return updated;
    });
  };

  // 🔁 불 자동 생성 (불이 존재하며 20개 미만이고, 메시지가 안 떠 있을 때만)
  useEffect(() => {
    if (fires.length >= 20 || showMessage) return;

    const interval = setInterval(() => {
      setFires((prev) => {
        if (prev.length >= 20) return prev;
        const newFire = {
          id: nextId,
          x: `${Math.random() * 70 + 10}%`,
          y: `${Math.random() * 40 + 10}%`,
        };
        return [...prev, newFire];
      });
      setNextId((id) => id + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [fires, nextId, showMessage]); // ✅ showMessage도 의존성에 포함

  // 🔔 불이 20개 이상 → 경고 Toast + 빨간 배경
  useEffect(() => {
    if (fires.length >= 20 && !hasExceededLimit) {
      setHasExceededLimit(true);
      setShowToast(true);
      setBackgroundType('red');
    }
  }, [fires.length, hasExceededLimit]);

  // 🎨 배경 이미지 조건
  let backgroundImage;
  switch (backgroundType) {
    case 'red':
      backgroundImage = bgImageRed;
      break;
    case 'blue':
      backgroundImage = bgImageBlue;
      break;
    default:
      backgroundImage = bgImage;
  }

  return (
    <>
      <Navbar />
      <div
        className="w-screen h-screen relative pt-20 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 텍스트 */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '10%',
            transform: 'translateY(-50%)',
            color: 'white',
            fontSize: '64px',
            fontWeight: 'bold',
            zIndex: 10,
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',
          }}
        >
          작은 불에서 시작됐다.
        </div>

        {/* 🔥 불 렌더링 */}
        {fires.map((fire) => (
          <FireComponent
            key={fire.id}
            id={fire.id}
            x={fire.x}
            y={fire.y}
            onClick={handleFireClick}
          />
        ))}

        {/* 🔔 토스트 경고 */}
        {showToast && (
          <ToastMessage
            message="🔥 작은 불씨가 돌이킬 수 없는 피해로 이어집니다."
            onClick={() => setShowToast(false)}
          />
        )}

        {/* 🟦 유도 메시지 (불이 모두 꺼졌을 때) */}
        {showMessage && <FireMessage />}
      </div>
    </>
  );
}

export default App;
