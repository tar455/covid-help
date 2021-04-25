import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home';
import Need from './pages/Needs';
function App() {
  return (
    <div>
          <BrowserRouter>
          <main>
            <Route  path="/" component={Home} exact></Route>
            <Route path="/needs" component={Need}></Route>
            </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
