import React from 'react';

export const GifItem = ({ url, title, id }) => {
  return (
    <div className="c-card">
      <h4>{title}</h4>
      <img className="c-card__img" src={url} alt={title} />
    </div>
  );
};
