export default function FireMessage() {
  return (
    <a
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'absolute',
        left: '48%',
        bottom: '32%',
        backgroundColor: 'white',
        padding: '8px 12px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
      }}
    >
      이곳을 눌러 이동!
    </a>
  );
}
