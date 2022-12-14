import Head from "next/head";
import Login from "../components/login";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth Kirtan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <Login />
      </main>
    </div>
  );
}
