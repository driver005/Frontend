import React from 'react';
import Charts from './Chart';
import { isConsideredMobile } from './utils'
import "./styles.css"
import Container from './Container';
import { useSelector } from 'react-redux';
import Loading from '../../../components/LoadingAnimation';

function Crypto() {
  const data = useSelector(state => state.crypto)
  if (!data.bitcoin?.data?.values) return <Loading />;
  if(!data.ethereum?.data?.values) return <Loading />;
  return (
    <div className="app">
      <Container
        currentPrice={data.bitcoin.currentPrice}
        diffPrice={data.bitcoin.diffPrice}
        hasIncreased={data.bitcoin.hasIncreased}
        titleTop={"Bitcoin Price"}
        titleBottom={"last 30 days"}
        chartStyle={{ height: '30rem' }}
      >
        <Charts enableCurveStepAfter={false} data={data.bitcoin.prices} />
      </Container>
      <Container
        currentPrice={data.ethereum.currentPrice}
        diffPrice={data.ethereum.diffPrice}
        hasIncreased={data.ethereum.hasIncreased}
        titleTop={"Ethereum Price"}
        titleBottom={"last 30 days"}
        chartStyle={{ height: '30rem' }}
      >
        <Charts enableCurveStepAfter={false} data={data.ethereum.prices} />
      </Container>   
    </div>
  );
}

export default Crypto;