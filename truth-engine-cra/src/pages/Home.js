import { Link } from 'react-router-dom';
import truthEngine from '../assets/truth-engine.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* Hero Section */}
      <section className="hero">
        {/* Video Background */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={truthEngine}
        >
          <source src="/videos/hero-bg4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top */}
        <div className="hero-content">
          <h1>Welcome to Truth Engine</h1>
          <p>Your AI-powered assistant for uncovering truth in trending topics.</p>
          <Link to="/analysis" className="cta-button">Start Analyzing</Link>
        </div>

        <img src={truthEngine} alt="AI Visual" className="hero-image" />
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">🧠 Enter a Topic</div>
          <div className="step">📊 Analyze Emotions</div>
          <div className="step">🚨 Detect Fake News</div>
          <div className="step">📰 See the Big Picture</div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="audience">
        <h2>Who It's For</h2>
        <div className="cards">
          <div className="card">
            <h3>📰 Journalists</h3>
            <p>Write with nuance, research faster, reduce bias.</p>
          </div>
          <div className="card">
            <h3>🏥 NGOs</h3>
            <p>Understand ground sentiment, detect crises early.</p>
          </div>
          <div className="card">
            <h3>📜 Policy Analysts</h3>
            <p>Measure public reaction to laws and events.</p>
          </div>
          <div className="card">
            <h3>👥 General Public</h3>
            <p>Get the full story — not just the headlines.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Truth Engine. Built with ❤️</p>
      </footer>

    </div>
  );
};

export default Home;
