import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  if (tours.length === 0) {
    return (
      <div className="tours-container">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="tours-container">
      <h2>Tours</h2>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
