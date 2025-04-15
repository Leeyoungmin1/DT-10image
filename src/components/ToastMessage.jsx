export default function ToastMessage({ message, onClick }) {
  return (
    <div
      onClick={() => {
        window.open('https://example.com', '_blank'); // 원하는 링크로 수정 가능
        onClick(); // 상태 초기화 용도
      }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg px-6 py-3 rounded-lg z-50 font-semibold text-sm cursor-pointer hover:bg-gray-100 transition"
      style={{
        top: '17%',
        color: 'white',
        fontSize: '32px',
        backgroundColor: 'rgba(221, 1, 1, 0.8)',
        padding: '20px 32px',
        // border: 'solid white 5px',
        borderRadius: '99px',
        boxShadow: '0 8px 12px rgba(0,0,0,0.6)',
      }}
    >
      {message}
    </div>
  );
}
