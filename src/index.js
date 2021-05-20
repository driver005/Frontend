import ReactDOM from "react-dom"
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import App from "./App"
import SignUp from "./User/SignUp"
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Dashboard from "./Dashboard";
import Confirm from './Confirm'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import ApolloProvider from './ApolloProvider'
import { useHistory } from "react-router-dom";
import Contact from "./components/Contact";
import PageNotFound from "./Errors/404";
import PageError from "./Errors/400";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const CloseButton = ({closeToast}) => <i onClick={closeToast} className="fas fa-times"/>

const PrivateRoute = ({component, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    return history.push("/sign-up")
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
  <Provider store={store}>
    <ApolloProvider>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton/>}
      />
      <Router>
          <Switch>
            <Route exact path='/confirm/:id' component={Confirm} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/' exact component={App} />
            <Route path='/sign-up' exact component={SignUp} />
            <PrivateRoute path='/dash/' component={Dashboard} />
            <Route path="*" exact component={PageError} />
          </Switch>   
      </Router>
      </ApolloProvider>
  </Provider>
  , document.querySelector("#root"))
