import React, { useState } from 'react';

import StarIcon from './StarIcon';

const Rating = ({ numberOfStars, rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(rating);

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '1em',
          fontWeight: 'bold',
        }}>
        Rating {rating}/{numberOfStars} : {hoverRating}
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[...Array(numberOfStars)].map((_, idx) => (
          <StarIcon
            key={idx}
            fillStar={idx < hoverRating ? '100%' : '0%'}
            onClick={() => setRating(idx + 1)}
            onMouseEnter={() => setHoverRating(idx + 1)}
            onMouseLeave={() => setHoverRating(rating)}
          />
        ))}
      </div>
    </>
  );
};

export default Rating;
