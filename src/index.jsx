import './i18n'; // 👈 must be first

import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Controller } from 'react-scrollmagic';
import Footer from './components/common/Footer';
import LoadingAnimation from './components/common/LoadingAnimation';
import App from './pages';
import Projects from './pages/projects';
import Printer from './pages/printer';

import "./index.css"

createRoot(document.getElementById('root')).render(
    <Controller>
        <Router>
            {/* <Route path='*' exact element={<PageError />} /> */}
            {/* <Route exact path='/contact' element={<Contact />} /> */}
            <Suspense fallback={<LoadingAnimation />}>
                <Routes>
                    <Route path='/' exact element={<App />} />
                    <Route path='/projects' exact element={<Projects />} />
                    <Route path='/printer' exact element={<Printer />} />
                </Routes>
            </Suspense>
            <footer>
                <Footer />
            </footer>
        </Router>
    </Controller>,
    document.querySelector('#root'),
);
