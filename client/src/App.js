import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';
import Navbar from './components/NavBar';
import './components/NavBar.css'
import LoginPage from './components/LoginPage';

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
      <header className='App-Header'>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage groups={groups} setGroup={setGroup} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/group" element={<GroupPage groups={groups} setGroups={setGroups} group={group} setGroup={setGroup} />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
