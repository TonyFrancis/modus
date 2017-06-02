import React from 'react';
import Slider from 'react-slick';
import ArticlesItem from './ArticlesItem';


// Writing Articles as stateless component since data is static.
const Articles = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const contents = [
      {
        "title": "Dark horse",
        "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.\
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.\
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
      "bgImage": "http://akanksharedhu.com/wp-content/uploads/2016/09/DSC6815-copy.jpg",
    },
      {
        "title": "What to were on wedding.",
        "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.\
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.\
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
      "bgImage": "http://www.thegirlatfirstavenue.com/wp-content/uploads/2016/07/4.jpg",
    }

    ]
    return (
      <div>
      <Slider {...settings}>
          {/*
            Some problem with <ArticlesItem key={index} content={content} />
            Slider is coming properly when called as component.
            but work perfectly when called as function.
          */}

          {contents.map((content, key) => ArticlesItem({content, key}))}
      </Slider>
      </div>);
}

export default Articles;
