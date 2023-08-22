import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './Layout/Layout';
import { bitcoin, ethereum } from '../../actions/crypto';
import { coin } from '../../actions/table';
import { weather } from '../../actions/weather';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const App = () => {
    const dispatch = useDispatch()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    useEffect(() => {
        dispatch(bitcoin())
        dispatch(coin())
        dispatch(ethereum())
        dispatch(weather())

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <>
            <Layout dispatch={dispatch} windowDimensions={windowDimensions} />
        </>
    );
}

export default App;
