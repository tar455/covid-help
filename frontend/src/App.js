import {BrowserRouter,Route} from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import LoginPage from './pages/LoginPage';
import NeedsFrom from "./pages/NeedsForm";
import Signup from './pages/signup';
function App() {
  return (
    <div>
          <BrowserRouter>
          <main>
            <Route  path="/" component={Home} exact></Route>
            <Route path="/needs" component={NeedsFrom}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signup" component={Signup}></Route>
            </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
