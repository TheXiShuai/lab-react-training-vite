import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="box-color" style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
};

export default BoxColor;
