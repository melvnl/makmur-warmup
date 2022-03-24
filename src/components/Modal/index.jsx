/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './index.css';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// import isAlpha from 'validator/lib/isAlpha';
// import isAlphanumeric from 'validator/lib/isAlphanumeric';
// import contains from 'validator/lib/contains';

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
  const [page, setPage] = useState(0);
  const [country, setCountry] = useState('United Kingdom');

  const [error, setError] = useState(false);

  const isAlphanumeric = (check) => {
    if (check.match(/^[0-9a-zA-Z]+$/)) {
      return true;
    }

    return false;
  };

  const isAlpha = (check) => {
    if (check.match(/^[a-zA-Z]+$/)) {
      return true;
    }

    return false;
  };

  const isDate = (check) => {
    const reg = /^\d{2}[-]\d{2}[-]\d{4}$/;

    const params = check.split('-');
    const day = parseInt(params[0], 10);
    const month = parseInt(params[1], 10);
    // not good, still there is bug, ex: 31 - 02 - 2000
    if (check.match(reg) && (day > 0 && day <= 31) && (month > 0 && month <= 12)) return true;
    return false;
  };

  const validateInput = () => {
    if (isAlphanumeric(title) && isAlpha(author) && isbn.includes('-') && isDate(published) && page !== '') {
      setError(false);
      return true;
    }
    setError(true);
    return false;
  };

  const {
    books: {
      getBooks,
    },
  } = useDispatch();

  const addBook = () => {
    if (validateInput()) {
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
    }
  };

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
                  placeholder="day-month-year , ex: 01-03-2000"
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
              {error ? (<p style={{ color: '#FF6F81' }}>There is an error in your input</p>) : null}
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
