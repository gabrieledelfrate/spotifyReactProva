import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import PlayerControls from './components/PlayerControls';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Route path="/" component={Sidebar} />
          <BrowserRouter>
            <Route path="/main" component={MainPage} />
          </BrowserRouter>
        </div>
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;