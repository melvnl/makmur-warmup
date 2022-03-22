import React, { useEffect } from "react";
import './index.css'

import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";

const Modal = ({ setIsOpen }) => {

  const countries = useSelector((state) => state.countries.data);

  const {
    countries: {
      getCountries,
    },
  } = useDispatch();

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  //dummy data
  const addBook = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_BOOK_API, {
      "title": "Naruto",
      "author": "Michelle Durgan",
      "isbn": "45afbccf-ee8b-45c4-b576-9b097640143",
      "publishedOn": "2021-04-01T06:22:04.049Z",
      "numberOfPages": 40,
      "country": "Eritrea",
      "imageUrl": "https://picsum.photos/200/300"
    })
      .then(function (response) {
        console.log("sucess")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(countries)

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Add Book</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className="modalContent">
            <form onSubmit={addBook} style={{ padding: 8 }} >
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Title:
                </label>
                <input type="text" name="name" placeholder="Title" style={{ fontSize: 16, width: '100%', padding: 4, height: 26, backgroundColor: "#F6F6F6", border: "none", outline: "none" }} />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Author:
                </label>
                <input type="text" name="author" placeholder="Author" style={{ fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: "#F6F6F6", border: "none", outline: "none" }} />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  ISBN:
                </label>
                <input type="text" name="ISBN" placeholder="ISBN" style={{ fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: "#F6F6F6", border: "none", outline: "none" }} />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Published On:
                </label>
                <input type="text" name="publishedOn" placeholder="publishedOn" style={{ fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: "#F6F6F6", border: "none", outline: "none" }} />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Number of Page
                </label>
                <input type="text" name="numberOfPage" placeholder="Number of Page" style={{ fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: "#F6F6F6", border: "none", outline: "none" }} />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Country
                </label>
                <select name="country" style={{ fontSize: 16, width: '100%', padding: 4, height: 30, outline: "none", backgroundColor: "#F6F6F6", border: "none" }}>
                  {!countries ? (
                    <option>Loading..</option>
                  ) : (
                    countries.map((country) => {
                      return (<option key={country.id} style={{ fontSize: 18, padding: 20 }}>{country.name}</option>)
                    })
                  )}
                </select>
              </div>
              <input type="submit" value="Submit" style={{ border: 'none', color: "#fff", padding: 12, backgroundColor: "#FF6F81", float: "right", outline: "none", cursor: "pointer", borderRadius: 4 }} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default Modal;