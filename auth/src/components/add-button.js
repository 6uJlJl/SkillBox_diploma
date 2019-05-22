import React from 'react';

const AddButton = (props) => {
  let { loadPhotos, code, unsplash, counter } = props;

  return (
    <input
      type="button"
      value="Загрузить еще фотографии..."
      onClick = { ev => { loadPhotos( code, unsplash, counter ); }}
    />
  )
}

export default AddButton;
