import React from 'react';



const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Gender:</strong> {gender}
      </div>
      <div>
        <strong>Height:</strong> {height} cm
      </div>
      <div>
        <strong>Birth:</strong> {birth.toDateString()}
      </div>
    </div>
  );
};


export default IdCard;
