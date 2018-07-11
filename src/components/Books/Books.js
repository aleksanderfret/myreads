import React from 'react';
import Book from './Book/Book';

const books = (props) => {
  return (
    <ul className='books-grid'>
      {props.books.map((book) => (
        <Book
          onShelfChange={(newShelf) => {
            props.onShelfChange(book, newShelf)
          }}
          key={book.id}
          {...book} />
      ))}
    </ul>
  );
}

export default books;