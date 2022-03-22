import axios from 'axios';

const effects = (dispatch) => ({
  // get books
  async getBooks() {
    try {
      const result = await axios.get(
        process.env.REACT_APP_BOOK_API,
      ).then((res) => { return res.data});

      dispatch.books.setBooks(result);
    //   console.log(result)

    } catch (error) {
      console.log(error)
    }
  },

});

export default effects;
