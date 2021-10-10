import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: Noto Sans, Noto Sans KR;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;

// font-family: 'Nanum Myeongjo', serif;
