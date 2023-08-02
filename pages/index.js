import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout';
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from '@/lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
   <Layout>
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
