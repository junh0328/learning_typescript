const staticPage = ({ time }) => {
  return (
    <div>
      <h1>Static Props!</h1>
      <div>{time}</div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};
export default staticPage;

// revalidate : 3, 3초마다 해당 정적 사이트를 갱신해준다
