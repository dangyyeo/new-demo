import { message } from 'antd';
import { query as queryResume } from '../services/resume';

export default {

    namespace: 'app',

    state: {
        resumes: {},
    },

    subscriptions: {
        setup({ dispatch }) {  // eslint-disable-line
            dispatch({ type: 'query' });
        },
    },

    effects: {
        *query({ payload }, { call, put }) {  // eslint-disable-line
            const response = yield call(queryResume);
            const resumes = response.data.data;
            if (response.data.success && resumes) {
                yield put({
                    type: 'updateState',
                    payload: { resumes },
                });
            } else {
                message.error('Err');
            }
        },
    },

    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload };
        },
    },

};
