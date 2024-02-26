import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const AnimeDetails = () => {

    const {id} = useParams();
    const {data:anime, error, isPending} = useFetch('http://localhost:8000/anime/'+id);
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8000/anime/'+ anime.id, {
            method: "DELETE"
        }).then(()=>{
            history.push('/');
        })
    }
    
    return ( 
        <div className="animeDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>Loading...</div>}
            {anime && (
                <article>
                    <h2>{anime.title}</h2>
                    <p>{anime.released}</p>
                    <p>{anime.episodes}</p>
                    <p>{anime.description}</p>
                    <button onClick = {handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default AnimeDetails;