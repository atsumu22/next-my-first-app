import Head from "next/head";

import styles from "./Layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "atsumu code"
export const siteTitle = "Next.js blog";

function Layout(props) {
  const {children, home} = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={utilStyles.borderCircle} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}

      </header>
      <main>{children}</main>
      {!home && <Link href="/">←Home</Link>}
    </div>
  );
}
export default Layout;
