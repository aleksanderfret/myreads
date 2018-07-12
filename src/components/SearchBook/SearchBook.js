import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from '../../BooksAPI';
import Books from '../Books/Books';

class SearchBook extends Component {
  state = {
    books: [],
    query: ''
  }

  // Handles change of search input: setts state properly
  // and calls search method
  onSearchInputChange = (event) => {
    const newQuery = event.target.value;
    this.setState(() => ({ query: newQuery }))
    if (newQuery) {
      this.search(escapeRegExp(newQuery));
    } else {
      this.setState({ books: [] });
    }
  }

  // Decorates books from search results with shelf property
  // from booksOnShelves array (it is passed here via props
  // from main application component).
  addShelfInfo = (books) => {
    books.forEach((book) => {
      const bookOnShelf = this.props.booksOnShelves.find(b => b.id === book.id);
      if (bookOnShelf) {
        book.shelf = bookOnShelf.shelf;
      }
    })
  }

  // Performs searching and handles results.
  search = (query) => {
    BooksAPI.search(query)
      .then((books) => {
        if (books && this.state.query) {
          this.addShelfInfo(books);
          this.setState({ books }) // instead of { books: books }
        }
      })
      .catch(() => {
        this.setState({ books: [] });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <input
            type='text'
            name='search'
            value={this.state.query}
            onChange={this.onSearchInputChange}
          />
        </div>
        <div className='search-books-results'>
          {this.state.books.length > 0 && (
            <Books
              onShelfChange={this.props.onShelfChange}
              books={this.state.books}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBook;