import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelves from '../components/BookShelves/BookShelves';

class MyReads extends Component {
  state = {
    books: [],
    shelves: ['Currently Reading','Want To Read','Read']
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) // instead of { contacts: contacts }
    });
  }

  render() {
    return (
      <React.Fragment>
        <BookShelves
          books={this.state.books}
          shelves={this.state.shelves}/>
      </React.Fragment>
    );
  }
}

export default MyReads;