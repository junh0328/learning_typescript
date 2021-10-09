import React from 'react';
import Link from 'next/link';

const Tomato = () => {
  return (
    <div>
      <h2>Link to 'main' Page</h2>
      <Link href="/" scroll>
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};

export default Tomato;
