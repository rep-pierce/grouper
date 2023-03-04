import './App.css';
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GroupPage from './components/GroupPage';
import Navbar from './components/NavBar';
import './components/NavBar.css'
import LoginPage from './components/LoginPage';
import { useSetRecoilState } from 'recoil';
import { groupsStateAtom } from './recoil/atoms';

function App() {
  const setGroups = useSetRecoilState(groupsStateAtom);

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
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/group" element={<GroupPage />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
