import './Message.css';

export default function ToastMessage({ message }) {
  const handleClick = () => {
    window.open(
      'https://www.safekorea.go.kr/idsiSFK/neo/main/main.html',
      '_blank'
    );
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer message-style"
      style={{
        backgroundColor: 'rgba(221, 1, 1, 0.85)',
        color: 'white',
        top: '17%',
        padding: '16px 28px',
        boxShadow: '0 8px 12px rgba(0,0,0,0.6)',
        transition: 'all 0.3s',
      }}
    >
      {message}
    </div>
  );
}
