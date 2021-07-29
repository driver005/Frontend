import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../../../components/LoadingAnimation';
import Littlecomponent from './Little';
import numeral from 'numeral';

function Littlecomponents() {
    const crypto = useSelector(state => state.crypto)
    const data = useSelector(state => state)
    if (!crypto.bitcoin?.data?.values) return <Loading />;
    if (!crypto.ethereum?.data?.values) return <Loading />;
    return (
        <React.Fragment>
            <Littlecomponent 
                name={"Bitcoin Price last 30 days"} 
                hasIncreased={crypto.bitcoin.maxPrice < crypto.bitcoin.currentPrice} 
                statenames={[
                    'Current price',
                    'Highest price ever',
                    'Difference price since month started',

                ]}
                statevalues={[
                    crypto.bitcoin.currentPrice,
                    crypto.bitcoin.maxPrice,
                    crypto.bitcoin.diffPrice,
                ]}  
                hasIncreasedtext={'since highest price'}
                procent={numeral(crypto.bitcoin.currentPrice / crypto.bitcoin.maxPrice * 100).format(0)}
            />
            <Littlecomponent 
                name={"Ethereum Price last 30 days"} 
                hasIncreased={crypto.ethereum.maxPrice < crypto.ethereum.currentPrice} 
                statenames={[
                    'Current price',
                    'Highest price ever',
                    'Difference price since month started',

                ]}
                statevalues={[
                    crypto.ethereum.currentPrice,
                    crypto.ethereum.maxPrice,
                    crypto.ethereum.diffPrice,
                ]}  
                hasIncreasedtext={'since highest price'}
                procent={numeral(crypto.ethereum.currentPrice / crypto.ethereum.maxPrice * 100).format(0)}
            />
        </React.Fragment>
    )
}

export default Littlecomponents
