import React from 'react';

// Component to display a single tour card
function TourCard({ tour, onRemove }) {
  // Destructure tour properties for easier access
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Display the tour image or a placeholder if the image is missing */}
      <img
        src={image || 'https://via.placeholder.com/300'}
        alt={name}
        className="tour-image"
      />
      <div className="tour-details">
        {/* Display the tour name */}
        <h3>{name}</h3>
        {/* Display the tour info, truncated to 200 characters if too long */}
        <p>{info.length > 200 ? `${info.substring(0, 200)}...` : info}</p>
        {/* Display the tour price */}
        <p className="tour-price">Price: ${price}</p>
        {/* Button to remove the tour, calls the onRemove function with the tour ID */}
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;