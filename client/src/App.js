import './App.css';
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';
import Navbar from './components/NavBar';
import './components/NavBar.css'
import LoginPage from './components/LoginPage';
import PostForm from './components/PostForm';
import GroupView from './components/GroupView';

function App() {
  const [group, setGroup] = useState({})
  const [groups, setGroups] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const fetchGroups = () => {
    fetch('/groups')
      .then((r) => r.json())
      .then(setGroups)
  }

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
    fetchGroups()
  }, [])

  return (
    <div className="App">
      <header className='App-Header'>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div>
          <Routes>
            {!currentUser ?
              <Route path="/" element={
                <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
              }
              />
              :
              <>
                <Route path="/home" element={ <HomePage /> } />
                <Route path="groups" element={ <GroupPage currentUser={currentUser} groups={groups}/> }>
                  <Route path='new' element={ <PostForm currentUser={currentUser} /> } />
                  <Route path=':groupId' element={ <GroupView currentUser={currentUser} groups={groups} setGroups={setGroups} fetchGroups={fetchGroups} /> } />
                </Route>
              </>
            }
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
