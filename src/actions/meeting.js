import * as api from '../api/index.js';

export const meeting = (period) => async (dispatch) => {
    try {
        const data = await api.fetchMeetings(period);
        await dispatch(
            {
                type: 'FETCH_MEETINGS',
                payload: data.data
            }
        )
    } catch (error) {
        return { err: error, message: `Failed Data Error` };
    }
};

export const addMeeting = (formData) => async (dispatch) => {
    try {
        const data = await api.createMeeting(formData);
        await dispatch(
            {
                type: 'CREATE_MEETING',
                payload: data.data.data
            }
        )
    } catch (error) {
        return { err: error, message: `Failed Data Error` };
    }
};