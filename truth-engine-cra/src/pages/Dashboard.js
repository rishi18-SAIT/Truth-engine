import './Dashboard.css';

const Dashboard = () => {
  const stats = {
    topicsAnalyzed: 128,
    fakeNewsCount: 42,
    mostCommonEmotion: 'Angry'
  };

  const recentTopics = [
    'Farm Bill Protest',
    'Election Exit Polls',
    'Budget 2025 Announcement',
    'Celebrity Death Hoax',
    'Viral School Incident'
  ];

  const tips = [
    '🔍 Use concise keywords for better analysis.',
    '📰 Double-check source credibility.',
    '📈 Analyze sentiment trends over time.'
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">📊 Dashboard Overview</h2>

      <div className="stat-cards">
        <div className="stat-card">
          <h3>{stats.topicsAnalyzed}</h3>
          <p>Topics Analyzed</p>
        </div>
        <div className="stat-card">
          <h3>{stats.fakeNewsCount}</h3>
          <p>Fake News Flags</p>
        </div>
        <div className="stat-card">
          <h3>{stats.mostCommonEmotion}</h3>
          <p>Trending Emotion</p>
        </div>
      </div>

      <div className="recent-topics">
        <h3 className="recent-heading">🕵️‍♂️ Recent Topics</h3>
        <ul className="recent-list">
          {recentTopics.map((topic, idx) => (
            <li key={idx} className="recent-item">{topic}</li>
          ))}
        </ul>
      </div>

      <div className="quick-tips">
        <h3 className="tips-heading">💡 Quick Tips</h3>
        <ul className="tips-list">
          {tips.map((tip, idx) => (
            <li key={idx} className="tip-item">{tip}</li>
          ))}
        </ul>
      </div>

      <div className="feedback-section">
        <h3 className="feedback-heading">📬 We Value Your Feedback</h3>
        <textarea
          className="feedback-input"
          placeholder="Share your thoughts or suggestions..."
        ></textarea>
        <button className="submit-feedback">Submit</button>
      </div>
    </div>
  );
};

export default Dashboard;
