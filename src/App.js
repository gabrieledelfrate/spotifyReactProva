import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import PlayerControls from './components/PlayerControls';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Route path="/" component={Sidebar} />
          <Switch>
            <Route path="/main" component={MainPage} />
          </Switch>
        </div>
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;