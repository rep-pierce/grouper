import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
  }, [groups])

  function renderGroups(){
    return groups.map(group => <h2 key={group.id}>{group.name}</h2>)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            {renderGroups()}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
