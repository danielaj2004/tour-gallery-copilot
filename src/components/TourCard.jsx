import React from 'react';

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img
        src={image || 'https://via.placeholder.com/300'}
        alt={name}
        className="tour-image"
      />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info.length > 200 ? `${info.substring(0, 200)}...` : info}</p>
        <p className="tour-price">Price: ${price}</p>
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;