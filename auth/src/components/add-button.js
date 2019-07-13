import React from 'react';
import { saveScroll } from '../localestorage';

const AddButton = (props) => {
  let { loadPhotos, code, unsplash, counter } = props;
  return (
    <input
      type="button"
      value="Загрузить еще фотографии..."
      onClick = { () => {
        saveScroll();
        loadPhotos( code, unsplash, counter ); }}
    />
  )
}

export default AddButton;
