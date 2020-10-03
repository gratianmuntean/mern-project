import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

const App = () => {
  const getExercises = () => {
    console.log('salut baieti cine manca castraveti');
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/exercises`)
      .then(res => {
        const exercises = res.data;
        console.log('exercises', exercises);
      })
  }, [])
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={getExercises}>Click me to get exercises</button>
        </div>
      </div>
    </div>
  );
}

export default App;
