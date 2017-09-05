import React  from 'react';
import PropTypes from 'prop-types';

import BookAction from './bookAction';
import * as BooksAPI from '../BooksApi';

const BookItem = props => {
  const onChange = shelf => {
    const { book } = props;
    BooksAPI.update(book, shelf).then((data) => {
      props.bookUpdate(data);
    });
  }

  const { book, savedBooks } = props;
  const { imageLinks, title, authors, shelf } = book;
  let updateShelf = shelf;
  if (!shelf) {
    const findBook = savedBooks.filter(bk => bk.id === book.id);
    if (findBook.length > 0) {
      updateShelf = findBook[0].shelf;
    }
  }
  const { thumbnail } = imageLinks;
  const authorsString = authors ? authors.join(', ') : '';
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail}")` }}
            />
            <div className="book-shelf-changer">
              <BookAction
                selected={updateShelf}
                onChange={onChange}
              />
            </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorsString}</div>
      </div>
    </li>
  )
};

BookItem.propTypes = {
  book: PropTypes.object,
  bookUpdate: PropTypes.func,
  savedBooks: PropTypes.arrayOf(PropTypes.object)
};

export default BookItem;
