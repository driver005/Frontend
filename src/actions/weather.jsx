import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const weather = () => async (dispatch) => {
    try {
        const data = await api.weatherInfo();
        await dispatch(
            {
                type: 'FETCH_WEATHER',
                payload: data.data
            }
        )
    } catch (error) {
        return { err: error, message: `Failed Data Error` };
    }
};