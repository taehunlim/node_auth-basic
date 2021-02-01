
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Register";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={ props => <Home {...props}/> } />
              <Route path="/register" render={ props => <Register {...props}/> } />
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
