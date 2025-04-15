import { useState } from 'react';
import FireComponent from './components/FireComponent';
import FireMessage from './components/FireMessage';
import ToastMessage from './components/ToastMessage';
import Navbar from './components/Navbar';
import bgImage from './assets/10img-bg-black.png';
import bgImageRed from './assets/10img-bg-red.png';
import bgImageBlue from './assets/10img-bg-blue.png';

function App() {
  const [showFire, setShowFire] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [backgroundType, setBackgroundType] = useState('default');

  const handleFireClick = () => {
    setBackgroundType('blue');
    setShowMessage(true);
    setShowFire(false); // 🔥 불 사라지게 함
  };

  const handleFireMaxSize = () => {
    setBackgroundType('red');
    setShowToast(true);
    setShowFire(false); // 🔥 불 사라지게 함
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  // ✅ ✅ ✅ 여기서 배경 이미지 조건 설정
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
      <Navbar /> {/* ✅ 네비게이션 바를 가장 위에 표시 */}
      <div
        className="w-screen h-screen relative pt-20" // ✅ 네비에 안 가리게 패딩
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* ✅ 이 부분에 글씨 추가 */}
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

        {showFire && (
          <FireComponent
            onClick={handleFireClick}
            onMaxSize={handleFireMaxSize}
          />
        )}

        {showMessage && <FireMessage />}

        {showToast && (
          <ToastMessage
            message="작은 불을 무시하면 돌이킬 수 없는 피해가 생깁니다"
            onClick={handleToastClose}
          />
        )}
      </div>
    </>
  );
}

export default App;
