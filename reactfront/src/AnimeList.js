import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AnimeList = ({ anime, title }) => {
  return (
    <div className="animeList">
      <h2>{title}</h2>
      {anime.map((anime) => (
        <div className="animePreview" key={anime.id}>
          <Link to={`/anime/${anime.id}`}>
            <h2>{anime.title}</h2>
            <p>Number of Episodes = {anime.episodes}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
