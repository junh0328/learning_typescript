import fetch from 'isomorphic-unfetch';
import { useEffect } from 'react';

const name = ({ user }) => {
  useEffect(() => {
    console.log('user:', user);
  }, [user]);
  const username = user && user.name;

  return (
    <div>
      <h1>Hello github!</h1>
      <div>{username}</div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
