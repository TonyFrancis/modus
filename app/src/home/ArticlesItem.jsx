import React from 'react';

const ArticlesItem = ({content, index}) => (
  <div key={index}><h3>{content}</h3></div>
)

ArticlesItem.propTypes = {
  content: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default ArticlesItem;
