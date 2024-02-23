const AnimeList = ({anime,title}) => {

  return (
    <div className="animeList">
        <h2>{title}</h2>
      {anime.map((anime) => (
        <div className="animePreview" key={anime.id}>
          <h2>{anime.title}</h2>
          <p>Number of Episodes = {anime.episodes}</p>
          
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
