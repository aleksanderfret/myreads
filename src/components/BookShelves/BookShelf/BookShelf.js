import React from 'react';
import Books from '../../Books/Books';

const BookShelf = (props) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.header}</h2>
      <Books
        onShelfChange={props.onShelfChange}
        books={props.books} />
    </div>
  );
}

export default BookShelf;