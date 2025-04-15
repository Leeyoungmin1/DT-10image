export default function FireMessage() {
  const handleClick = () => {
    window.open('https://example.com', '_blank'); // 링크 이동
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer hover:opacity-90 transition"
      style={{
        backgroundColor: 'rgba(0, 102, 204, 0.85)', // 파란 배경
        color: 'white',
        fontSize: '24px',
        padding: '16px 28px',
        borderRadius: '99px',
        boxShadow: '0 8px 12px rgba(0,0,0,0.6)',
        top: '17%',
      }}
    >
      🍀 당신의 작은 관심이 큰 문제를 예방할 수 있습니다!
    </div>
  );
}
