import axios from 'axios';

const effects = (dispatch) => ({
  // get books
  async getBooks() {
    try {
      const result = await axios.get(
        'https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books',
      ).then((res) => { return res.data});

      dispatch.books.setBooks(result);
    //   console.log(result)

    } catch (error) {
      console.log(error)
    }
  },

});

export default effects;
