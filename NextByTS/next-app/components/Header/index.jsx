import React, { useState } from 'react';
import css from 'styled-jsx/css';
import { IoLogoGithub } from 'react-icons/io';
import { useRouter } from 'next/router';

const HeaderCss = css`
  .header-wrapper {
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }

  .header-search-form input {
    margin: 0px 16px;
    background-color: hsla(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0px 12px;
    font-size: 14px;
    font-weight: bold;
  }

  .header-navagations a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/users/${username}`);
    setUsername('');
  };

  return (
    <div>
      <div className="header-wrapper">
        <IoLogoGithub color="white" size={36} />
        <form className="header-search-form" onSubmit={onSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <nav className="header-navagations">
          <a href="https://github.com/pulls">Pull requests</a>
          <a href="https://github.com/issues">Issues</a>
          <a href="https://github.com/marketplace">Marketplace</a>
          <a href="https://github.com/explore">Explore</a>
        </nav>
      </div>
      <style jsx>{HeaderCss}</style>
    </div>
  );
};

export default Header;
