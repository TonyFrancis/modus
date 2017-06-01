import React from 'react';
import Slider from 'react-slick';
import ArticlesItem from './ArticlesItem';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      swipeToSlide: true,
    };
    return (
      <div>
      <Slider {...settings}>

        {["a","b","c"].map( (content, index) => (
          <ArticlesItem content={content} key={index} />
        ))}
      </Slider>
      </div>);
  }
}
