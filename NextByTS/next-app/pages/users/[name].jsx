import css from 'styled-jsx/css';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

const style = css`
  .user-contents-wrapper {
    padding: 20px;
    display: flex;
  }
`;

const name = ({ user, repos }) => {
  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <Repositories user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  );
};

// <Link href={`/users/${userName}`}> 에서 userName으로 넘어오는 name을 getServerSideProps로 넘겨준다

export const getServerSideProps = async ({ query }) => {
  // 초기 페이지를 1로 줬다
  const { name, page = '1' } = query;
  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
    if (userRes.status === 200) {
      user = await userRes.json();
    } else {
      throw Error(userRes.statusText);
    }

    const reposRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`,
      {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
        },
      }
    );
    if (reposRes.status === 200) {
      repos = await reposRes.json();
    } else {
      throw Error(userRes.statusText);
    }

    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;

// https://github.com/settings/tokens
