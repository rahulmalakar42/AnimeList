
import AnimeList from './AnimeList';
import useFetch from './useFetch';

const Home = () => {
    const {data:anime, isPending, error} = useFetch('http://localhost:8000/anime')
  return (
    
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {anime && <AnimeList anime={anime} title="All Anime" />}
        
    </div>

  );
  
};

export default Home;
