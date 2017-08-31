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

  const { book } = props;
  const { imageLinks, title, authors, shelf } = book;
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
                selected={shelf}
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
  bookUpdate: PropTypes.func
};

export default BookItem;
