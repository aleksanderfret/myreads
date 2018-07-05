import React from 'react';
import BookShelf from './BookShelf/BookShelf';

const bookShelves = (props) => {
  console.log(props.books);
  return (
    <React.Fragment>
      {props.shelves.map((shelf) => (
        <BookShelf
          key={shelf}
          shelfHeader={shelf}
          shelfBooks={props.books.filter(
            (book) => shelf.replace(/\s+/g, '').toLowerCase() === book.shelf.toLowerCase()
          )}
        />
      ))}
    </React.Fragment>
  );
}

export default bookShelves;