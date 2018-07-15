import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';


class BookDetails extends Component {
  state = {
    book: {}
  }

  componentDidMount = () => {
    const { match: { params } } = this.props;

    BooksAPI.get(params.id).then((book) => {
      this.setState({ book });
    });
  }

  render() {
    return(
      <div>
        <Link to='/'>Home</Link>
        <div>
          {this.state.book.imageLinks && this.state.book.imageLinks.smallThumbnail &&
            <img src={this.state.book.imageLinks.smallThumbnail} alt={`Cover of book ${this.state.book.title}`} />
          }
        </div>
        <p className='book-title'>{this.state.book.title}</p>
        {this.state.book.authors &&
          <p className='book-authors'>{this.state.book.authors.join(', ')}</p>
        }
        {this.state.book.ratingsCount &&
          <p className='book-authors'>Rating: {this.state.book.ratingsCount}</p>
        }
        {this.state.book.description &&
          <p className='book-authors'>{this.state.book.description}</p>
        }
      </div>
    );
  }
}
export default BookDetails;