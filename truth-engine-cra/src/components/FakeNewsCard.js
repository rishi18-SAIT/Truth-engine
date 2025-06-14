const FakeNewsCard = ({ result }) => {
  return (
    <div style={{
      padding: '1rem',
      background: result === 'Likely Fake' ? '#ffe5e5' : '#e5ffe5',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginTop: '1rem',
    }}>
      <h3>Fake News Detection</h3>
      <p><strong>Result:</strong> {result}</p>
    </div>
  );
};

export default FakeNewsCard;
