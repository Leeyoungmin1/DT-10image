export default function Overlay({ onClose }) {
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white px-6 py-4 rounded text-center text-lg font-semibold cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          window.open('https://example.com', '_blank');
          onClose();
        }}
      >
        작은 불을 무시하면 돌이킬 수 없는 피해가 생깁니다
      </div>
    </div>
  );
}
