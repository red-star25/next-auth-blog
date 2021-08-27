import { getSession } from "next-auth/client";
import styles from "../styles/Blog.module.css";

function Blog({ data }) {
  return (
    <div className={styles.blog}>
      <h1>{data}</h1>
    </div>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "Welcome to Blog page",
    },
  };
}
