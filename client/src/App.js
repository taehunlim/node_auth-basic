
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import {Provider} from 'react-redux';
import store from './store'
import {persistStore} from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import jwt_decoded from 'jwt-decode';

import {setCurrentUser, loginUser} from "./actions/authActions";
import setAuthToken from "./utills/setAuthToken";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Verification from "./screens/Verification";
import Authenticate from "./screens/Authenticate";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';



const persist = persistStore(store)

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decoded(localStorage.jwtToken)

    store.dispatch(setCurrentUser(decoded))

    const currentTime = Date.now() / 1000;

    if(decoded.exp < currentTime) {
        store.dispatch(loginUser());
        window.location.href = '/authenticate'
    }
}

function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" exact render={ props => <Home {...props}/> } />
                      <Route path="/register" render={ props => <Register {...props}/> } />
                      <Route path="/account/verify-email/:token" render={ props => <Verification {...props}/> } />
                      <Route path="/authenticate" render={ props => <Authenticate {...props}/> } />
                      <Route path="/account/forgot-password" render={ props => <ForgotPassword {...props}/> } />
                      <Route path="/account/reset-password/:token" render={ props => <ResetPassword {...props}/> } />
                      <Redirect to="/" />
                  </Switch>
              </BrowserRouter>
          </PersistGate>

      </Provider>

  );
}

export default App;
