import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>(This is a sample website)</p>
        {/* Link to FirstPost page */}
        <Link href="/posts/first-post">Go to first post</Link>
      </section>
    </Layout>
  );
}
