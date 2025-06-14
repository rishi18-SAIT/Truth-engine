import { useState } from 'react';

const TopicSearchForm = ({ onSearch }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) onSearch(topic);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter a topic (e.g. protests, election)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Analyze</button>
    </form>
  );
};

export default TopicSearchForm;
