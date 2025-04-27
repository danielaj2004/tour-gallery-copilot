import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw error if response is not OK
      }
      const data = await response.json();
      setTours(data); // Update tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Show loading message while data is being fetched
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  // Show error message if there is an error
  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  // Show a message and refresh button if no tours are left
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

  // Render the Gallery component with the list of tours
  return (
    <div className="tours-container">
      <h2>Tours</h2>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
