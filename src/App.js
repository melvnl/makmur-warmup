import Card from '../src/components/Card'
import Header from '../src/components/Header'
import './App.css'

import { useSelector } from 'react-redux'

function App() {
  const bookList = useSelector((state) => state.books)

  if (!bookList) return null;

  return (
    <div className='main'>
      <div className="content">
        <Header bookTotal={bookList.length} />
        {bookList.map((book) =>
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
