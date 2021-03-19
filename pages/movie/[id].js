import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Link from 'next/link';

export default function Home({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            {info.title}
        </h1>

        <p>{info.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />

        <Link href="/busca">Buscar filme</Link>

      </main>
        
    </div>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/movieAPI/${context.params.id}`);
    const json = await res.json();
  
    return {
        props: {
            info: json.info
        }
    };
}