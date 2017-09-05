import React from 'react';
import PropTypes from 'prop-types';

import BookItem from './bookItem';

const BookList = props => {
  const bookUpdate = shelf => {
    props.bookUpdate(shelf);
  }

    const { books, savedBooks } = props;
    if(!books || books.error) {
      return (
        <div>no books...</div>
      )
    }
    return (
      <ol className="books-grid">
        {
          books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              bookUpdate={bookUpdate}
              savedBooks={savedBooks}
            />
          ))
        }
      </ol>
    )
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  bookUpdate: PropTypes.func,
  savedBooks: PropTypes.arrayOf(PropTypes.object)
};

export default BookList;
