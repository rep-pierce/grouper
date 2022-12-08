import './App.css';
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';
import LoginPage from './components/LoginPage';

function App() {
  const [groups, setGroups] = useState([])
  const [group, setGroup] = useState({})
  const [currentUser, setCurrentUser] = useState('')
  const [login, setLogin] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/groups')
    .then((r) => r.json())
    .then(setGroups)
  }, [groups])

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(setCurrentUser)
      }
    })
  },[currentUser])

  // if(!currentUser) return <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>

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

          <Route exact path = "/login"
          element={<LoginPage 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          login={login}
          setLogin={setLogin}
          />}/>
        </Routes>
      </div>
  );
}

export default App;
