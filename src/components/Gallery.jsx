import React from 'react';
import TourCard from './TourCard';

// Component to display a gallery of tours
function Gallery({ tours, onRemove }) {
  // If no tours are available, display a fallback message
  if (!tours || tours.length === 0) {
    return <p className="no-tours">No tours available.</p>;
  }

  // Render a list of TourCard components for each tour
  return (
    <div className="gallery">
      {tours.map((tour) => (
        // Pass each tour and the onRemove function to the TourCard component
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;