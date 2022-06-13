import React, { useState } from 'react';

import './style.css';
import Rating from './components/Rating';

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <div style={{ backgroundColor: '#ccc', padding: '1em' }}>
      <Rating numberOfStars={10} rating={rating} setRating={setRating} />
    </div>
  );
}
