import { createRoot } from 'react-dom/client';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Controller } from 'react-scrollmagic';
import App from './App';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact';
import PageError from './Errors/400';
import Moon from './Moon';
import Projects from './Projects';
import Footer from './components/Footer/Footer';
import Printer from './Printer';

createRoot(document.getElementById('root')).render(
        <Controller>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton />}
            />
            <Router>
                <Routes>
                    <Route exact path='/contact' element={<Contact />} />
                    <Route path='/' exact element={<App />} />
                    <Route path='/projects' exact element={<Projects />} />
                    <Route path='/printer' exact element={<Printer />} />
                    <Route exact path='/moon' element={<Moon />} />

                    <Route path='*' exact element={<PageError />} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </Controller>,
    document.querySelector('#root'),
);
