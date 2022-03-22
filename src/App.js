import Card from '../src/components/Card'
import Header from '../src/components/Header'
import './App.css'

import { useDispatch , useSelector} from 'react-redux'
import { useEffect } from 'react'

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

  if (!books) return (
    <div className="empty-card">
      Book is empty
    </div>
  );

  console.log(books)

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
