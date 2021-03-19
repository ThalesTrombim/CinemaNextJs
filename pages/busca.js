import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState } from 'react';

export default function Busca() {
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  
  const handleSearch = async () => {
    if(search !== '') {
        const result = await fetch(`http://localhost:3000/api/search?q=${search}`);
        const json = await result.json();
        setMovieList(json.list);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  
    return (
    <div className={styles.container}>
      <Head>
        <title>Busca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>

        <input type="text" value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>Buscar</button>
            <hr/>

            <ul>
                {movieList.map(item=>(
                    <li>
                        <a href={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width='150' /><br/>
                            {item.title} 
                        </a>
                    </li>
                ))}
            </ul>
      </main>
        
        

    </div>
  )
}