/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './index.css';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Modal({ setIsOpen }) {
  const countries = useSelector((state) => state.countries.countries);

  const {
    countries: {
      getCountries,
    },
  } = useDispatch();

  useEffect(() => {
    if (countries === null) {
      getCountries();
    }
  }, [countries, getCountries]);

  // form data
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [published, setPublished] = useState('');
  const [page, setPage] = useState('');
  const [country, setCountry] = useState('');

  const {
    books: {
      getBooks,
    },
  } = useDispatch();

  const addBook = () => {
    axios({
      method: 'POST',
      url: process.env.REACT_APP_BOOK_API,
      data: {
        title,
        author,
        isbn,
        publishedOn: published,
        numberOfPages: page,
        country,
        imageUrl: 'https://picsum.photos/200/300',
      },
    })
      .then(() => {
        setIsOpen(false);
        getBooks();
      })
      .catch(() => {

      });
  };

  console.log(countries);

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Add Book</h5>
          </div>
          <button type="button" className="closeBtn" onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className="modalContent">
            <div style={{ padding: 8 }}>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label htmlFor="title" style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Title:
                </label>
                <input
                  id="title"
                  type="text"
                  name="name"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 26, backgroundColor: '#F6F6F6', border: 'none', outline: 'none',
                  }}
                />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label htmlFor="author" style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Author:
                </label>
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: '#F6F6F6', border: 'none', outline: 'none',
                  }}
                />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  ISBN:
                </label>
                <input
                  type="text"
                  name="ISBN"
                  placeholder="ISBN"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: '#F6F6F6', border: 'none', outline: 'none',
                  }}
                />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Published On:
                </label>
                <input
                  type="text"
                  name="publishedOn"
                  placeholder="publishedOn"
                  value={published}
                  onChange={(e) => setPublished(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: '#F6F6F6', border: 'none', outline: 'none',
                  }}
                />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Number of Page
                </label>
                <input
                  type="text"
                  name="numberOfPage"
                  placeholder="Number of Page"
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 24, backgroundColor: '#F6F6F6', border: 'none', outline: 'none',
                  }}
                />
              </div>
              <div className="form-row" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', marginBottom: 4, fontSize: 16 }}>
                  Country
                </label>
                <select
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  style={{
                    fontSize: 16, width: '100%', padding: 4, height: 30, outline: 'none', backgroundColor: '#F6F6F6', border: 'none',
                  }}
                >
                  { countries === null ? (
                    <option>Loading..</option>
                  ) : (
                    countries.map((item) => (
                      <option key={item.id} style={{ fontSize: 18, padding: 20 }}>
                        {item.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <button
                type="submit"
                value="Submit"
                onClick={() => addBook()}
                style={{
                  border: 'none', color: '#fff', padding: 12, backgroundColor: '#FF6F81', float: 'right', outline: 'none', cursor: 'pointer', borderRadius: 4,
                }}
              >
                Submit

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  setIsOpen: propTypes.func,
};

Modal.defaultProps = {
  setIsOpen: false,
};
