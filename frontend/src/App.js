import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from "./pages/Home";
import LoginPage from './pages/LoginPage';
import NeedsFrom from "./pages/NeedsForm";
import ProfileSet from './pages/ProfileSet';
import Signup from './pages/signup';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/needs" component={NeedsFrom} />
          <Route path="/about" component={About}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile-setting" component={ProfileSet}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
