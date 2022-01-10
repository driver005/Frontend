import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
        const reqbody = {
            grant_type: 'password',
            username: formData.email || '',
            password: formData.password || '',
            scope: 'offline_access'
        }

        const tockens = await api.signIn(reqbody);

        dispatch({ type: AUTH, data: tockens.data });

        const user = await api.userInfo()

        const data = {
            access_token: tockens.data.access_token,
            refresh_token: tockens.data.refresh_token,
            info: {
                authCode: tockens.data.info.authCode,
                client: tockens.data.info.client,
                user: user.data.user
            },
            token_type: tockens.data.token_type
        }

        dispatch({ type: AUTH, data: data });

        router.go(-1)
    } catch (error) {
        return { err: error, message: `Wrong credentials` };
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const userInfo = await api.signUp(formData);

        if (userInfo.data.err) {
            return (userInfo.data.err)
        }
        const reqbody = {
            grant_type: 'password',
            username: userInfo.data.email || '',
            password: userInfo.data.password || '',
            scope: 'offline_access'
        }

        const tockens = await api.signIn(reqbody);

        dispatch({ type: AUTH, data: tockens.data });

        const user = await api.userInfo()

        const data = {
            access_token: tockens.data.access_token,
            refresh_token: tockens.data.refresh_token,
            info: {
                authCode: tockens.data.info.authCode,
                client: tockens.data.info.client,
                user: user.data.user
            },
            token_type: tockens.data.token_type
        }

        dispatch({ type: AUTH, data: data });
        router.go(-1)
    } catch (error) {
        return { err: error, message: `Dublicated Username or Email Address` };
    }
};
