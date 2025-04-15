export default function ToastMessage({ message, onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      style={{
        backgroundColor: 'rgba(221, 1, 1, 0.85)',
        color: 'white',
        top: '17%',
        fontSize: '24px',
        padding: '16px 28px',
        borderRadius: '99px',
        boxShadow: '0 8px 12px rgba(0,0,0,0.6)',
        transition: 'all 0.3s',
      }}
    >
      {message}
    </div>
  );
}
