const AnimeList = ({anime,title, handleDelete}) => {

  return (
    <div className="animeList">
        <h2>{title}</h2>
      {anime.map((anime) => (
        <div className="animePreview" key={anime.id}>
          <h2>{anime.title}</h2>
          <p>Number of Episodes = {anime.episodes}</p>
          <button onClick={()=>handleDelete(anime.id)}>Delete Anime</button>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
