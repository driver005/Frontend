import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import App from "./App"
import SignUp from "./User/SignUp"
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { transitions, positions, types, Provider as AlertProvider, } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Dashboard from "./Dashboard";

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

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/dash' exact component={Dashboard} />
          </Switch>   
      </Router>
    </Provider>
  </AlertProvider>
  , document.querySelector("#root"))
