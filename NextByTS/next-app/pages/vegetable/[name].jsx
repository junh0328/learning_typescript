import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect } from 'react';

const name = () => {
  const router = useRouter();
  const { name } = router.query;

  // router.query 안에 들어있는 객체는 우리가 다이나믹 라우팅 시에 지정해준 [name].jsx 의 name으로 나오게 된다
  useEffect(() => {
    if (router) console.log(router);
  }, []);

  return (
    <div>
      <h2>Hello! {name}</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  );
};

export default name;
