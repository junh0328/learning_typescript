# NextJS Introduction

# Chapter 1

## useRouter를 활용한 조건부 스타일링

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href={"/about"}>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
```

## .modules.css 로 스타일링 하기

```css
.active {
  color: tomato;
}
```

```jsx
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href={"/about"}>
        <a className={router.pathname === "/about" ? styles.active : ""}>
          About
        </a>
      </Link>
    </nav>
  );
}
```

## .modules.css 중복 스타일링 적용하기

한가지 클래스 내에 두가지 스타일링을 적용하고 싶은 경우에 사용할 수 있다.

```css
.link {
  text-decoration: none;
}

.active {
  color: tomato;
}
```

```jsx
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          className={`${styles.link} ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
```

## \_app.js로 초기화하기

```jsx
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
```

# Chapter 2

## Next/Head 패턴화 하기

```jsx
import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
```

```jsx
// case 1: Seo >> About
import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
}
```

```jsx
// case 2: Seo >> Home
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello </h1>
    </div>
  );
}
```

## Next js next.config.js 를 통해 redirect 하기

`source`, `destination` 프로퍼티를 사용하여 이전 블로그의 주소를 새로 이전한 블로그의 주소로 변환해줄 수 있습니다.

```js
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
};
```
