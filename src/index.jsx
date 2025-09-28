import './i18n'; // 👈 must be first

import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Controller } from 'react-scrollmagic';
import Footer from './components/common/footer';
import LoadingAnimation from './components/common/loading_animation';
import App from './pages';
import Projects from './pages/projects';
import Printer from './pages/printer';
import { HelmetProvider } from 'react-helmet-async';

import "./index.css"

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
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
        </Controller>
    </HelmetProvider>,
    document.querySelector('#root'),
);
