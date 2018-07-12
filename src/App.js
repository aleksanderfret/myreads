import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MyReads from './containers/MyReads';
import SearchBook from './components/SearchBook/SearchBook';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    booksOnShelves: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((booksOnShelves) => {
      this.setState({ booksOnShelves }) // instead of { books: books }
    });
  }

  // Changes shelf of the book and then updates state accordingly
  // (either updates shelf property for the book existing in state,
  // or adds new book to state).
  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((updated) => {
      if (updated[newShelf] && updated[newShelf].includes(book.id)) {
        this.setState((prevState) => {
          const newBooks = [...prevState.booksOnShelves];
          const prevBook = newBooks.find(b => b.id === book.id);
          if (prevBook) {
            prevBook.shelf = newShelf;
          } else {
            book.shelf = newShelf;
            newBooks.push(book);
          }
          return { booksOnShelves: newBooks };
        });
      }})
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ () => (
          <Layout>
            <MyReads
              books={this.state.booksOnShelves}
              onShelfChange={this.onShelfChange} />
          </Layout>
        )}/>
        <Route path='/search' render={ ({history}) => (
          <SearchBook
            booksOnShelves={this.state.booksOnShelves}
            onShelfChange={this.onShelfChange}
          />
        )}/>
      </div>
    );
  }
}

export default App;
