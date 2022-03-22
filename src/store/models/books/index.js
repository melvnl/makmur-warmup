/* eslint-disable import/no-anonymous-default-export */
import effects from './effects';

export const initialState = {
  books: null,
};

export default {
  state: initialState,
  reducers: {
    setBooks(state, data) {
      return {
        ...state,
        data,
      };
    },
  },
  effects,
};
