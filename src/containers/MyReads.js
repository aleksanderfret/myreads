import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelves from '../components/BookShelves/BookShelves';

class MyReads extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) // instead of { books: books }
    });
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((updated) => {
      if (updated[newShelf] && updated[newShelf].includes(book.id)) {
        this.setState((prevState) => {
          const newBooks = [...prevState.books];
          const prevBook = newBooks.find(b => b.id === book.id);
          prevBook.shelf = newShelf;
          return { books: newBooks };
        })
      }})
  }


render() {
  return (
    <React.Fragment>
      <BookShelves
        onShelfChange={this.onShelfChange}
        books={this.state.books} />
      <div className='open-search'>
        <Link
          to='/search'
          className=''
        >Search Book</Link>
      </div>
    </React.Fragment>
  );
}
}

export default MyReads;