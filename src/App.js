import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component = { Home } />
            <Route path="/Signin" exact component = { Signin } />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
