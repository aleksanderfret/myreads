import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelves from '../components/BookShelves/BookShelves';

class MyReads extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) // instead of { contacts: contacts }
    });
  }

  onShelfChange(book, newShelf) {
    BooksAPI.update(book, newShelf).then((updated) => {
      if (updated[newShelf] && updated[newShelf].includes(book.id)) {
        this.setState((prevState) => {
          //const prevBook = prevState.books.find(b => b.id === book.id);
          //prevBook.shelf = newShelf;


        })
      }})
  }


render() {
  return (
    <React.Fragment>
      <BookShelves
        onShelfChange={this.onShelfChange}
        books={this.state.books} />
    </React.Fragment>
  );
}
}

export default MyReads;