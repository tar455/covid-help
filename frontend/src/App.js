import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./pages/Home";
import NeedsFrom from "./pages/NeedsForm";
function App() {
  return (
    <div>
          <BrowserRouter>
          <main>
            <Route  path="/" component={Home} exact></Route>
            <Route path="/needs" component={NeedsFrom}></Route>
            </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
