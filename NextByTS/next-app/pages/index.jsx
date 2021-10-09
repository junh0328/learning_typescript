import React, { useState } from 'react';
import Link from 'next/link';

const index = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <br />
      <div>
        <label>
          username
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <p>{userName} 깃허브 검색하기</p>
        <Link href={`/users/${userName}`}>
          <a>검색하기</a>
        </Link>
      </div>
    </>
  );
};

export default index;
