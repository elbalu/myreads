import React, { Component } from 'react';
import * as BooksAPI from './BooksApi';
import BookShelf from './components/bookShelf';
import { Link } from 'react-router-dom';

const initialState = {
  books: []
};

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.renderShelf = this.renderShelf.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  renderShelf() {
    const { books } = this.state;

    if (!books || books.length <= 0) {
      return (
        <div>No results!!!</div>
      );
    }
    return (
      <BookShelf
        key="serch-shelf"
        type="Search"
        books={books}
      />
    );
  }
  onKeyDown(e) {
    if(e.target.value) {
      BooksAPI.search(e.target.value, 10).then((books) => {
        this.setState({ books });
      });
    }

  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyDown={this.onKeyDown}/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.renderShelf()}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
