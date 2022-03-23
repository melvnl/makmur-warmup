/* eslint-disable import/no-anonymous-default-export */
import effects from './effects';

export const initialState = {
  countries: null,
};

export default {
  state: initialState,
  reducers: {
    setCountries(state, payload) {
      return {
        ...state,
        countries: payload,
      };
    },
  },
  effects,
};
