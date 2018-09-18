export default {
  namespace: 'home',
  state: {
    count: 0,
  },
  effects: {
    *addCount({ payload }, { call, put, select }) {
      let count = yield select(state => state.home.count);
      count += 1;
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
