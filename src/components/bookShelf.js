import React from 'react';
import PropTypes from 'prop-types';
import BookList from './bookList';

const BookShelf = (props) => {
  const bookUpdate = (shelf) => {
    props.bookUpdate(shelf);
  }

  const { type, books, savedBooks } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{type}</h2>
        <div className="bookshelf-books">
          <BookList
            key={`list-${type}`}
            books={books}
            bookUpdate={bookUpdate}
            savedBooks={savedBooks}
          />
        </div>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  type: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object),
  savedBooks: PropTypes.arrayOf(PropTypes.object),
  bookUpdate: PropTypes.func
};
export default BookShelf;
