import axios from 'axios';

const effects = (dispatch) => ({
  // get books
  async getCountries() {
    try {
      const result = await axios.get(
        process.env.REACT_APP_COUNTRY_API,
      ).then((res) => res.data);

      dispatch.countries.setCountries(result);
      //   console.log(result)
    } catch (error) {
      console.log(error);
    }
  },

});

export default effects;
