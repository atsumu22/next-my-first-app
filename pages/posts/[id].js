import Layout from "@/components/Layout";
import { getAllPostIds, getPostsData } from "@/lib/post";
import  utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostsData(params.id);

  return {
    props: {
      postData
    }
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <h1 className={utilStyles.headingX1}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML}}/>
    </Layout>
  );
}
