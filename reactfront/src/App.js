import './App.css';

function App() {
  const title = "React Project"
  const likes = 50;
  const link = "http://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked : {likes}</p>
        <a href={link}>Link</a>
      </div>
    </div>
  );
}

export default App;
