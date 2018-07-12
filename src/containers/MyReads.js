import React from 'react';
import { Link } from 'react-router-dom';
import BookShelves from '../components/BookShelves/BookShelves';

const MyReads = (props) => (
  <React.Fragment>
    <BookShelves
      onShelfChange={props.onShelfChange}
      books={props.books} />
    <div className='open-search'>
      <Link
        to='/search'
      >Search Book</Link>
    </div>
  </React.Fragment>
);

export default MyReads;