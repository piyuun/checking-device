import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [exampleDataList, setExampleDataList] = useState<string[]>([]);
  const example01 = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    const isMob = toMatch.some((toMatchItem) => {
      return window.navigator.userAgent.match(toMatchItem);
    });

    if (isMob) {
      const list = [...exampleDataList];
      list[0] = 'mobile';
      setExampleDataList(list);
    } else {
      const list = [...exampleDataList];
      list[0] = 'pc';
      setExampleDataList(list);
    }
  };

  useEffect(() => {
    example01();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Test for device check</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Test for device check</h1>

        <div className={styles.description}>
          <table className={styles.table}>
            <tbody>
              {exampleDataList.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <strong>EX{id + 1}</strong>
                    </td>
                    <td>You are using: </td>
                    <td>
                      <code className={styles.code}>{item}</code>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
