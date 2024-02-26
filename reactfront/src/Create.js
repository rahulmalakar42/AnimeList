import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [released, setReleased] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [description, setDescription] = useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const anime = {title, released, episodes, description}
        setPending(true);

        fetch('http://localhost:8000/anime', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(anime)
        }).then(()=>{
            console.log('New anime added');
            setPending(false);
        })

        history.push('/')
    }
    return ( 
        <div className="create">
            <h2>Add a new anime</h2>
            <form onSubmit= {handleSubmit}>
                <label>Anime Title:</label>
                <input type="text" required value = {title} onChange={(e)=>{
                    setTitle(e.target.value)
                }} />
                <label>Released In:</label>
                <select value = {released} onChange={(e)=>{
                    setReleased(e.target.value)
                }}>
                    <option value="2005">2005</option>
                    <option value="2010">2010</option>
                </select>
                <label>Episodes:</label>
                <input type="number" required value = {episodes} onChange={(e)=>{
                    setEpisodes(e.target.value)
                }}/>
                <label>Description:</label>
                <textarea type="text" required value = {description} onChange={(e)=>{
                    setDescription(e.target.value)
                }} />
                {!pending && <button>Add Anime</button>}
                {pending && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Create;