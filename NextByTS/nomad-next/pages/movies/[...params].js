import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Details({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>
        {title}, {id}
      </h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}

// export function getServerSideProps(ctx) {
//   console.log(ctx);
//   return {
//     props: { params },
//   };
// }
