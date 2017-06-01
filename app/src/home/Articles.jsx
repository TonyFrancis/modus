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
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
      <Slider {...settings}>
            {["A","B"].map((content, index) =>ArticlesItem({content, index}))}
      </Slider>
      </div>);
  }
}
