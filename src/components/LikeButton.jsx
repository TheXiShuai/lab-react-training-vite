import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length); 
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="like-button">
      <button onClick={handleLikeClick} style={buttonStyle}>
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
