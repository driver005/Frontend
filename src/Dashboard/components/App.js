import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import ErrorPage from '../pages/error/ErrorPage';

import Layout from './Layout/Layout';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import { logoutUser } from '../../actions/user';

const PrivateRoute = ({dispatch, component, ...rest }) => {
    if (!JSON.parse(localStorage.getItem('profile'))) {
        dispatch(logoutUser());
        return (<Redirect push to="http://localhost:3000/sign-up"/>)
    } else {
        return (
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};


class App extends React.PureComponent {
  render() {
    return (
        <div>
            <Layout dispatch={this.props.dispatch} />
        </div>

    );
  }
}

export default App;
