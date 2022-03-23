import React from 'react';
import propTypes from 'prop-types';

export default function Card({
  title,
  author,
  isbn,
  numberOfPages,
  publishedOn,
  country,
  imageUrl,
}) {
  return (
    <div className="card-wrapper">
      <div className="card-detail">
        <div className="detail-header">
          <h1 className="card-title">
            {title}
          </h1>
          <p className="card-desc">
            Book by
            {' '}
            {author}
          </p>
        </div>
        <div className="detail-body">
          <div className="wrapper">
            <p style={{ color: '#9b9b9b' }}>ISBN</p>
            <p>{isbn}</p>
          </div>
          <div className="wrapper">
            <p style={{ color: '#9b9b9b' }}>Number of Page</p>
            <p>{numberOfPages}</p>
          </div>
          <div className="wrapper">
            <p style={{ color: '#9b9b9b' }}>Published On</p>
            <p>{publishedOn}</p>
          </div>
          <div className="wrapper">
            <p style={{ color: '#9b9b9b' }}>Country Publisher</p>
            <p>{country}</p>
          </div>

        </div>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt="" />
      </div>

    </div>
  );
}

Card.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  isbn: propTypes.string,
  numberOfPages: propTypes.string,
  publishedOn: propTypes.string,
  country: propTypes.string,
  imageUrl: propTypes.string,
};

Card.defaultProps = {
  title: '',
  author: '',
  isbn: '',
  numberOfPages: '',
  publishedOn: '',
  country: '',
  imageUrl: '',
};
