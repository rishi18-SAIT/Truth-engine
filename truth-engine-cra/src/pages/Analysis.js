import { useState } from 'react';
import TopicSearchForm from '../components/TopicSearchForm';
import EmotionChart from '../components/EmotionChart';
import FakeNewsCard from '../components/FakeNewsCard';
// import { getAnalysis } from '../services/api'; ← use later for real API
import './Analysis.css'; // Add this CSS file

const Analysis = () => {
  const [emotions, setEmotions] = useState(null);
  const [fakeNewsResult, setFakeNewsResult] = useState('');

  const handleSearch = async (topic) => {
    // MOCK DATA (replace with API call)
    // const response = await getAnalysis(topic);
    const mockEmotion = {
      Happy: 30,
      Angry: 25,
      Neutral: 20,
      Sad: 15,
      Surprised: 10
    };
    const mockFakeNews = topic.toLowerCase().includes("fake") ? "Likely Fake" : "Likely Real";

    setEmotions(mockEmotion);
    setFakeNewsResult(mockFakeNews);
  };

  return (
    <div className="analysis-container">
      <h2 className="analysis-title">🧠 Topic Analysis Engine</h2>
      <TopicSearchForm onSearch={handleSearch} />
      {emotions && <EmotionChart emotions={emotions} />}
      {fakeNewsResult && <FakeNewsCard result={fakeNewsResult} />}
    </div>
  );
};

export default Analysis;
