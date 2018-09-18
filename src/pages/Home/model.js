export default {
  namespace: 'home',
  state: {
    count: 0,
  },
  effects: {
    *count({ payload }, { call, put, select }) {
      let count = yield select(state => state.home.count);
      const { num = 1 } = payload;
      count += num;
      yield put({
        type: 'updateState',
        payload: { count },
      });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
