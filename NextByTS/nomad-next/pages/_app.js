import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: black;
        }
      `}</style>
    </>
  );
}

/*
  _app.js 페이지는 기본적으로 공통으로 들어가는 요소를 초기화하기 위한 페이지입니다.
  _app.js 페이지는 pages 폴더 내부에 들어있는 어떠한 파일보다 먼저 실행됩니다.
  매개변수로 받는 Component는 우리가 만든 about.js / index.js 등의 파일을 불러오게 됩니다.
*/
