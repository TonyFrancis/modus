import React from 'react';
// React.PropTypes deprecated on v15.5
import PropTypes from 'prop-types';


import {
  Card,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const ArticlesItem = ({content, key}) => (
  <Card key={key}>
    <CardMedia
      overlay={<CardTitle title={content.title} subtitle={`Content No: ${key + 1}`}/>}
    >
    <img
      alt="presentation"
      src={content.bgImage}
      style={{ height: '350px'}}/>
  </CardMedia>
  <CardText>
      {content.info }
  </CardText>
  </Card>
)

ArticlesItem.propTypes = {
  // content of the article
  content: PropTypes.shape({
    //title of articles.
    title: PropTypes.string.isRequired,
    // image link can be url or string.
    bgImage: PropTypes.string.isRequired,
    // Information of the article.
    info: PropTypes.string.isRequired,
  }).isRequired,
  // key of the article for react to ditinguish
  key: PropTypes.number.isRequired,
};

export default ArticlesItem;
