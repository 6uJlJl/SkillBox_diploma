import React from 'react';

const Date = ( {date} ) => {
  return (
    <div className = "date">
      <div>Дата публикации:</div>
      <div>{date}</div>
    </div>
  )
}

export default Date;
