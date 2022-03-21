import axios from "axios";

export const models = {
  state: {
    books: {},
  },
  reducers: {
    SET_BOOKS: (state, payload) => {
      return {
        ...state,
        books: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getBooks() {
      const response = await axios.get(
        "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books"
      );
      const data = await response.data;
      console.log(data);
      dispatch.players.SET_BOOKS(data);
    },
  }),
};