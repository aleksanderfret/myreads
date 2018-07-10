import React from 'react';
import BookShelf from './BookShelf/BookShelf';
import { getShelves } from '../../models/shelves';

const bookShelves = (props) => {
  return (
    <React.Fragment>
      {getShelves().map((shelf) => (
        <BookShelf
          header={shelf.label}
          key={shelf.id}
          onShelfChange={props.onShelfChange}
          books={props.books.filter(
            (book) => shelf.id === book.shelf
          )}
          />
      ))}
    </React.Fragment>
  );
}

export default bookShelves;