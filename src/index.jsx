import { createRoot } from 'react-dom/client';
import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
    Outlet,
} from 'react-router-dom';
import { Controller } from 'react-scrollmagic';
import App from './App';
import SignUp from './User/SignUp';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Dashboard from './Dashboard';
import Confirm from './Confirm';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Contact from './components/Contact';
import PageNotFound from './Errors/404';
import PageError from './Errors/400';
import Moon from './Moon';
import Events from './components/Events';
import Projects from './Projects';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Printer from './Printer';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const CloseButton = ({ closeToast }) => (
    <i onClick={closeToast} className='fas fa-times' />
);

// const PrivateRoute = ({ component }) => {
//     const dispatch = useDispatch();
//     const history = useNavigate();

//     const logout = () => {
//         dispatch({ type: 'LOGOUT' });

//         return history.push('/sign-up');
//     };

//     if (!JSON.parse(localStorage.getItem('profile'))) {
//         return <Navigate push to='/sign-up' />;
//     } else {
//         const token = JSON.parse(localStorage.getItem('profile'))?.access_token;
//         if (token) {
//             const decodedToken = decode(token);
//             if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//             return (
//                 <Route
//                     {...rest}
//                     element={component}
//                 />
//             );
//         }
//     }
// };

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        return history('/sign-up');
    }; // determine if authorized, from context or however you're doing it

    if (!JSON.parse(localStorage.getItem('profile'))) {
        return <Navigate push to='/sign-up' />
    } else {
        const token = JSON.parse(localStorage.getItem('profile'))?.access_token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            return (
                children
            );
        }
    }
}

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/*<ApolloProvider>*/}
        <Controller>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton />}
            />
            <Router>
                <Routes>
                    <Route exact path='/confirm/:id' element={<Confirm />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/event' element={<Events />} />
                    <Route path='/' exact element={<App />} />
                    <Route path='/projects' exact element={<Projects />} />
                    <Route path='/printer' exact element={<Printer />} />
                    <Route exact path='/moon' element={<Moon />} />


                    {/*
                        
                        <Route path='/dash/*' element={
                        <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } />
                        <Route path='/sign-up' exact element={<SignUp />} />
                        */}

                    <Route path='*' exact element={<PageError />} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </Controller>
        {/*</ApolloProvider>*/}
    </Provider>,
    document.querySelector('#root'),
);
