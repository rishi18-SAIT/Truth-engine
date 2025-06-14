
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
