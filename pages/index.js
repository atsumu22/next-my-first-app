import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from "../styles/utils.module.css";
import { getPostsMetaData } from '@/lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsMetaData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// // SSRの場合
// export async function gesServerSideProps(context) {

//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   };
// }


export default function Home({ allPostsData }) {
  return (
   <Layout home={true}>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        私はジュニアフルスタックエンジニアです。Ruby on Railsを用いたアプリケーション開発。Reactを用いたフロントエンド開発をメインとしています。現在Next.jsを学んでいます。AWSやDockerなどインフラ側を苦手としています。
      </p>
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail} className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
   </Layout>
  )
}
