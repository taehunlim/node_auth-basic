
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Verification from "./screens/Verification";
import Authenticate from "./screens/Authenticate";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={ props => <Home {...props}/> } />
              <Route path="/register" render={ props => <Register {...props}/> } />
              <Route path="/verify-email/:token" render={ props => <Verification{...props}/> } />
              <Route path="/authenticate" render={ props => <Authenticate {...props}/> } />
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
