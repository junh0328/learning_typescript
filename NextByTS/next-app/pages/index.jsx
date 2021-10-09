import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const index = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  return (
    <div>
      {/* <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato">
        <a>Move to '/tomato'</a>
      </Link>

      <br />
      <h2>Link to 'potato' Pages</h2>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>

      <br /> */}
      <h2>라우터 객체를 이용하여 라우팅 하기</h2>
      <div>
        <button type="button" onClick={() => router.push('/tomato')}>
          tomato로 가기
        </button>
        <p>이름</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '12px' }}
        />
        <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
          {name}으로 가기
        </button>
      </div>
    </div>
  );
};

export default index;
