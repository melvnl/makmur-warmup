/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

function App() {
  const books = useSelector((state) => state.books.data);

  const {
    books: {
      getBooks,
    },
  } = useDispatch();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  if (!books) {
    return (
      <div className="empty-card">
        Loading...
      </div>
    );
  }

  return (
    <div className="main">
      <div className="content">
        <Header bookTotal={books.length} />
        {books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            numberOfPages={book.numberOfPages}
            publishedOn={book.publishedOn}
            country={book.country}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
