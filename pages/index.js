import React from "react";
import Head from "next/head";
import randomWords from "random-words";
import styles from "../styles/Home.module.css";
import GhostText from "../components/ghosttext";
import MovingImage from "../components/movingimage";

export default function Home() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);

  const clickRandomImage = () => {
    //Get Random Google Search
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        process.env.NEXT_PUBLIC_GOOGLE_KEY
      }&num=1&searchType=image&cx=${
        process.env.NEXT_PUBLIC_GOOGLE_CX
      }&q=${randomWords({
        min: 1,
        max: 4,
      })}`
    )
      .then((res) => res.json())
      .then((result) => {
        const image = {
          source: result.items[0].link,
          height: result.items[0].image.height / 2,
          width: result.items[0].image.width / 2,
          title: result.items[0].title,
        };

        //Set Fading Text
        setText(Math.random() * 1000);
        //Add Movable Image Component
        setList([...list, <MovingImage key={list.length} {...image} />]);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Google Images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*<GhostText text={text} />*/}
        <button onClick={clickRandomImage}>Add Random Image</button>
        {list}
      </main>
      {/*
      <footer className={styles.footer}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>Documentation</a>
          <a href="https://nextjs.org/learn" className={styles.card}>Learn</a>
          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>Examples</a>
          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>Deploy</a>
        </div>
      </footer>
      */}
    </div>
  );
}
