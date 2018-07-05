import React from 'react';

const bookShelf = (props) => {
  return(
    <div className='bookshelf'>
      <h2>{props.shelfHeader}</h2>
      <ul className='books-grid'>
        {props.shelfBooks.map((book) => (
          <li key={book.id}>
            <img className='book-top' src={book.imageLinks.smallThumbnail} alt={`Cover of book ${book.title}`}/>
            <p className='book-title'>{book.title}</p>
            <p className='book-authors'>{book.authors}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default bookShelf;