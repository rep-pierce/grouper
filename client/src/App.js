import './App.css';
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';

function App() {
  const [groups, setGroups] = useState([])
  const [group, setGroup] = useState({})

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
          setGroup={setGroup}
          />}/>

        <Route exact path = "/group"
          element={<GroupPage 
          groups={groups}
          setGroups={setGroups}
          group={group}
          setGroup={setGroup}
        />}/>
        </Routes>
      </div>
  );
}

export default App;
