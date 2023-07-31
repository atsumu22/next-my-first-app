import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <Layout>
      <div>
        <h1>最初の投稿</h1>
        <Link href="http://localhost:3000"><h2>HOMEに戻る</h2></Link>
      </div>
      </Layout>
    </>
  );
}
