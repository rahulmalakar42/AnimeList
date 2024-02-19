import { useState, useEffect } from 'react';
import AnimeList from './AnimeList';

const Home = () => {
  const [anime, setAnime] = useState([
    { title: 'Naruto', body: 'temp', episodes: 720, id: 1 },
    { title: 'Death Note', body: 'temp', episodes: 37, id: 2 },
    { title: 'Bleach', body: 'temp', episodes: 366, id: 3 },
  ]);

  const handleDelete = (id)=>{
    const newAnime = anime.filter(anime=>anime.id!==id);
    setAnime(newAnime);
  }

  useEffect(()=>{
    console.log('useEffect ran');
  })
  return (
    
    <div className="home">
        <AnimeList anime={anime} title="All Anime" handleDelete={handleDelete}/>
        
    </div>

  );
  
};

export default Home;
