import React from 'react';
import BookControls from './BookControls/BookControls';

const Book = (props) => {
  return (
    <li key={props.id} className='book'>
      <div className='book-top'>
        {props.imageLinks && props.imageLinks.smallThumbnail &&
          <img src={props.imageLinks.smallThumbnail} alt={`Cover of book ${props.title}`} />
        }
        <BookControls
          currentShelf={props.shelf}
          onShelfChange={props.onShelfChange} />
      </div>
      <p className='book-title'>{props.title}</p>
      {props.authors &&
        <p className='book-authors'>{props.authors}</p>
      }
    </li>
  );
}

export default Book;