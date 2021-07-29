import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const bitcoin = () => async (dispatch) => {
    try {
        const data = await api.bitcoinInfo();
        let close = []
        const prices = await Object.keys(data.data.data.values).map(index => {
            close = [...close, data.data.data.values[index][4]]
            return({
                time: new Date(data.data.data.values[index][0]),
                open: data.data.data.values[index][1],
                high: data.data.data.values[index][2],
                low: data.data.data.values[index][3],
                close: data.data.data.values[index][4],
                volume: data.data.data.values[index][5],
            })
        })
        const currentPrice = prices[prices.length - 1].close;
        const firstPrice = prices[prices.length - 2].close;
        const maxPrice = Math.max(...close)
        const diffPrice = currentPrice - firstPrice;
        const hasIncreased = diffPrice > 0;
        await dispatch(
            {
                type: 'CREATE_CRYPTO',
                payload: {
                    data: data.data.data,
                    prices: prices,
                    currentPrice: currentPrice,
                    firstPrice: firstPrice,
                    maxPrice: maxPrice,
                    diffPrice: diffPrice,
                    hasIncreased: hasIncreased,
                },
                name: 'bitcoin'
            }
        )
    } catch (error) {
        return {err: error, message: `Failed Data Error`};
    }
};


export const ethereum = () => async (dispatch) => {
    try {
        const data = await api.ethereumInfo();
        let close = []
        const prices = await Object.keys(data.data.data.values).map(index => {
            close = [...close, data.data.data.values[index][4]]
            return({
                time: new Date(data.data.data.values[index][0]),
                open: data.data.data.values[index][1],
                high: data.data.data.values[index][2],
                low: data.data.data.values[index][3],
                close: data.data.data.values[index][4],
                volume: data.data.data.values[index][5],
            })
        })
        const currentPrice = prices[prices.length - 1].close;
        const firstPrice = prices[prices.length - 2].close;
        const maxPrice = Math.max(...close)
        const diffPrice = currentPrice - firstPrice;
        const hasIncreased = diffPrice > 0;
        await dispatch(
            {
                type: 'CREATE_CRYPTO',
                payload: {
                    data: data.data.data,
                    prices: prices,
                    currentPrice: currentPrice,
                    firstPrice: firstPrice,
                    maxPrice: maxPrice,
                    diffPrice: diffPrice,
                    hasIncreased: hasIncreased,
                },
                name: 'ethereum'
            }
        )
    } catch (error) {
        return {err: error, message: `Failed Data Error`};
    }
};