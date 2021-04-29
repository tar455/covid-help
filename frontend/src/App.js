import {BrowserRouter,Route} from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import NeedsFrom from "./pages/NeedsForm";
function App() {
  return (
    <div>
          <BrowserRouter>
          <main>
            <Route  path="/" component={Home} exact></Route>
            <Route path="/needs" component={NeedsFrom}></Route>
            <Route path="/about" component={About}></Route>
            </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
