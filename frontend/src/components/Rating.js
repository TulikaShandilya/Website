import React from 'react';

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fa-solid fa-circle'
              : rating >= 0.5
              ? 'fa-solid fa-heart'
              : 'fa-regular fa-circle'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa-solid fa-circle'
              : rating >= 1.5
              ? 'fa-solid fa-heart'
              : 'fa-regular fa-circle'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa-solid fa-circle'
              : rating >= 2.5
              ? 'fa-solid fa-heart'
              : 'fa-regular fa-circle'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa-solid fa-circle'
              : rating >= 3.5
              ? 'fa-solid fa-heart'
              : 'fa-regular fa-circle'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa-solid fa-circle'
              : rating >= 4.5
              ? 'fa-solid fa-heart'
              : 'fa-regular fa-circle'
          }
        ></i>
      </span>
      <span>{numReviews + 'reviews'}</span>
    </div>
  );
}

export default Rating;
