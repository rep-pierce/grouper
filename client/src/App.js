import './App.css';
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';
import Navbar from './components/NavBar';
import './components/NavBar.css'
import LoginPage from './components/LoginPage';

function App() {
  const [groups, setGroups] = useState([])
  const [group, setGroup] = useState({})
  // const [login, setLogin] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const initialRender = useRef(true);

  useEffect(() => {
      fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
            .then(setCurrentUser)
        }
      })
  }, [])

  useEffect(() => {
    fetch('/groups')
      .then((r) => r.json())
      .then(setGroups)
  }, [])


  return (
    <div className="App">
      <header className='App-Header'>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div>
          <Routes>
            {!currentUser ?
      <Route path="/" element={
        <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
      }
      />
      :
      <>
        <Route path="/home" element={
          <HomePage groups={groups} setGroup={setGroup} />
        }
        />
        <Route path="/group" element={
          <GroupPage group={group} setGroup={setGroup} />
        } />
      </>
}
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
