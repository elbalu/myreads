import React  from 'react';
import PropTypes from 'prop-types';

const BookAction = props => {

  const onChanged = e => {
    props.onChange(e.target.value);
  }
  const { selected } = props;
  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={onChanged}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookAction.propTypes = {
  selected: PropTypes.string,
  onChange: PropTypes.func
};

export default BookAction;
