import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../src/components/Card'
import Header from '../src/components/Header'
import './App.css'

const baseURL = "https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setBooks(response.data);
    });
  }, []);

  if (!books) return null;

  return (
    <div className='main'>
      <div className="content">
        <Header bookTotal={books.length} />
        {books.map((book) =>
        (
          <Card key={book.id} title={book.title}
            author={book.author}
            isbn={book.isbn}
            numberOfPages={book.numberOfPages}
            publishedOn={book.publishedOn}
            country={book.country}
            imageUrl={book.imageUrl} />
        )
        )}
      </div>
    </div>
  );
}

export default App;
