import './App.css';
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0);
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch('/groups')
    .then((r) => r.json())
    .then(setGroups)
  }, [])

  return (
      <div className="App">
        <Routes>
          <Route exact path="/" 
          element={<HomePage 
          groups={groups}
          />}/>
        </Routes>
      </div>
  );
}

export default App;
