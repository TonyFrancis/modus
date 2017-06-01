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
    var item = [<div><h3>1</h3></div>,<div><h3>2</h3></div>]
    console.log(Array.isArray(item))
    console.log(Array.isArray([1,2].map(content => <ArticlesItem content={content} />)))
    var item =["A","B"].map(content => <div><h3>{content}</h3></div>)
    return (
      <div>
      <Slider {...settings}>
            {item}
      </Slider>
      </div>);
  }
}
