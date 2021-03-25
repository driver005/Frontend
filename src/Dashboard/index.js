import React from 'react'
import App from './components/App'
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import GlobalStyle from './globalstyle';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Dashboard = () => {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

export default Dashboard
