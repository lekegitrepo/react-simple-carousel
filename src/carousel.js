import React from 'react';
import ImageSlide from './image-slide';
import Arrow from './arrow';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';

 const imgUrls = [Image1, Image2, Image3];

class Carousel extends React.Component {
  constructor(props){
    super(props);

    this.state = { currentImageIndex: 0};

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount(){
    this.indexCount = setInterval(
      () => this.nextSlide(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.indexCount);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const index =  this.incrementIndex();

    this.setState({
      currentImageIndex: index
    });
  }

  incrementIndex(){
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    return shouldResetIndex ? 0 : currentImageIndex + 1;
  }

  render () {
    console.log(imgUrls[this.state.currentImageIndex])
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <ImageSlide imageUrl={ imgUrls[this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
