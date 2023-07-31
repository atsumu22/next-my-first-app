import Head from "next/head";

const name = "atsumu code"
export const siteTitle = "Next.js blog";

function Layout({children}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
export default Layout;
