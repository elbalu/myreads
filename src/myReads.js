import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import * as BooksAPI from './BooksApi';
import BookShelf from './components/bookShelf';

const initialState = {
  books: [],
  shelfs: []
};

class MyReads extends Component {
  constructor(props) {
    super(props);
    this.state =  initialState;
    this.fetchBooks = this.fetchBooks.bind(this);
    this.filterBooksByShelfType = this.filterBooksByShelfType.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    BooksAPI.getAll().then((books) => {
      const allShelfs = books.map(b => b.shelf);
      const shelfs = allShelfs.filter((s, i) => i === allShelfs.indexOf(s));
      this.setState({ books, shelfs });

    });
  }
  filterBooksByShelfType(type) {
    const { books } = this.state;
    return books.filter(book => book.shelf === type);
  }
  render() {
    const { shelfs } = this.state;
    if (shelfs.length <= 0) {
      return (
        <h1>No Shelfs avaliable!</h1>
      );
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            shelfs.map((shelf) => (
              <BookShelf
                key={`shelf-${shelf}`}
                type={shelf}
                books={this.filterBooksByShelfType(shelf)}
                bookUpdate={this.fetchBooks}
              />
            ))
          }
        </div>
        <div className="open-search">
          <Link to={'/search'} />
        </div>
      </div>
    );
  }
}



export default MyReads;
