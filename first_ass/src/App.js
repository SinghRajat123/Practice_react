import { useState } from 'react';
import './App.css';

import MovieList from './Components/MovieList.js';
import MovieDisplay from './Components/MovieDisplay.js';





function App() {
const [movie, setMovie] = useState({});


  return (
    <div>
      <h1> Movie App</h1>
      
      
      <MovieList updateMovie={setMovie}/>
      <MovieDisplay movieDetails={movie}/>/
    </div>
  );
}

export default App;
