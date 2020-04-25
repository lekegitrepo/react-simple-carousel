import React from 'react';

class Carousel extends React.Component {
  render () {
    return (
      <div className="carousel">
        <ImageSlide url={ imgUrl } />
      </div>
    );
  }
}

export default Carousel;
