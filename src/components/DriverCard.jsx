import React from "react";
import './DriverCard.css'; 

const DriverCard = ({ name, rating, img, car }) => {
    return (
      <div className="driver-card">
        <div className="driver-img">
          <img src={img} alt={`${name} avatar`} />
        </div>
        <div className="driver-info">
          <h2>{name}</h2>
          <div className="credit-card-rating">
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {typeof rating === 'number' ? rating.toFixed(2) : ''}
          </div>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  };

export default DriverCard;
