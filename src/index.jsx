import { createRoot } from 'react-dom/client';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Controller } from 'react-scrollmagic';
import App from './components/pages/App';
import PageError from './components/errors/400';
import Moon from './components/home/Moon';
import Projects from './components/pages/Projects';
import Footer from './components/common/Footer/Footer';
import Printer from './components/printer';

import "./index.css"

createRoot(document.getElementById('root')).render(
        <Controller>
            <Router>
                <Routes>
                    {/* <Route exact path='/contact' element={<Contact />} /> */}
                    <Route path='/' exact element={<App />} />
                    <Route path='/projects' exact element={<Projects />} />
                    <Route path='/printer' exact element={<Printer />} />
                    <Route exact path='/moon' element={<Moon />} />

                    {/* <Route path='*' exact element={<PageError />} /> */}
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </Controller>,
    document.querySelector('#root'),
);
