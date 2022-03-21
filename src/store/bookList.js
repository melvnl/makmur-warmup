import axios from "axios";
import { init } from "@rematch/core";


export const bookList = {
    state: {
        books:[]
    },
    reducers: {
        setBooks(state, payload) {
          return {
            ...state,
            books: payload,
          };
        },
        setError(state, payload) {
          return {
          ...state,
          fetchError: payload
          }
        }
    },
    effects: (dispatch) => ({
         fetchBookList() {

          var list;
          try {
            list = axios.get(process.env.REACT_APP_BOOK_API).then((response) => {
                // console.log(response);
                this.setBooks(response.data);
              });
            dispatch.bookList.setBooks(list);
          } catch (error) {
            dispatch.TaskList.setError(error);
          }
        },
      }),
    
}