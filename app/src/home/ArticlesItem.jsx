import React from 'react';

const ArticlesItem = ({content}) => (
  <p>
    {content}
  </p>
)

ArticlesItem.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default ArticlesItem
