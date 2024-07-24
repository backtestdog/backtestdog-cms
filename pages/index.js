import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TestDog-Back-System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to TestDog-Back-System</h1>
        <div className={styles.grid}>
          <Link href="/panel/home">Go to the Panel !</Link>
        </div>
      </main>
    </div>
  );
}
