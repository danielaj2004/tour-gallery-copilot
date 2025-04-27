import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  if (!tours || tours.length === 0) {
    return <p className="no-tours">No tours available.</p>;
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;