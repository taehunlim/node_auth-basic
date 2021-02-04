
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Verification from "./screens/Verification";
import Authenticate from "./screens/Authenticate";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import {Provider} from 'react-redux';
import store from './store'
import {persistStore} from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";

const persist = persistStore(store)

function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" exact render={ props => <Home {...props}/> } />
                      <Route path="/register" render={ props => <Register {...props}/> } />
                      <Route path="/verify-email/:token" render={ props => <Verification{...props}/> } />
                      <Route path="/authenticate" render={ props => <Authenticate {...props}/> } />
                      <Redirect to="/" />
                  </Switch>
              </BrowserRouter>
          </PersistGate>

      </Provider>

  );
}

export default App;
