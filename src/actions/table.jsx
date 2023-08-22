import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const coin = () => async (dispatch) => {
    try {
        const data = await api.coinInfo();
        await dispatch(
            {
                type: 'FETCH_TABLE',
                payload: data.data
            }
        )
    } catch (error) {
        return { err: error, message: `Failed Data Error` };
    }
};