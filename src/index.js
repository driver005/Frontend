import ReactDOM from "react-dom"
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import App from "./App"
import SignUp from "./User/SignUp"
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { transitions, positions, types, Provider as AlertProvider, } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Dashboard from "./Dashboard";
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_LEFT,
  timeout: 5000,
  offset: '30px',
  type: types.ERROR,  
  // you can also just use 'scale'
  transition: transitions.SCALE
}



const PrivateRoute = ({component, ...rest }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    return (<Redirect push to="/sign-up"/>)
  };

  if (!JSON.parse(localStorage.getItem('profile'))) {
      return (<Redirect push to="/sign-up"/>)
  } else {
    const token = JSON.parse(localStorage.getItem('profile'))?.access_token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      return (
        <Route {...rest} render={props => (React.createElement(component, props))}/>
      );
    }
  }
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/sign-up' exact component={SignUp} />
            <PrivateRoute path='/dash' exact component={Dashboard} />
          </Switch>   
      </Router>
    </Provider>
  </AlertProvider>
  , document.querySelector("#root"))
