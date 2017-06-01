import React from 'react';

const ArticlesItem = ({content}) => (
  <div><h3>{content}</h3></div>
)

ArticlesItem.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default ArticlesItem;
