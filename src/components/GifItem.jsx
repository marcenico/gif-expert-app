import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ url, title, id }) => {
  return (
    <div className="c-card">
      <h4>{title}</h4>
      <img className="c-card__img" src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
