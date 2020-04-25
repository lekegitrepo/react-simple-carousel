import React from 'react';

const ImageSlide = ({ imageUrl }) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default ImageSlide;
