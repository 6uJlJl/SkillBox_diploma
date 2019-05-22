import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/mainlist';
import AddButton from '../components/add-button';
import { likePhoto, unlikePhoto, loadPhotos, addPhotos } from '../actions';


let PhotoApp = (props) => {

  let {
    listOfPhotos,
    likePhoto,
    unlikePhoto,
    loadPhotos,
    dispatch,
    unsplash
  } = props

  if ( listOfPhotos.listOfPhotos.length === 0 ) {
    return (
      <div>
        <p>Здесь пока нет фотографий...</p>
        <AddButton
          loadPhotos={loadPhotos}
          code = {listOfPhotos.code}
          unsplash = {listOfPhotos.unsplash}
          counter = {listOfPhotos.counter}
        />
        </div>
      )
  } else {
    return (
        <div>
          <MainList
            listOfPhotos={listOfPhotos.listOfPhotos}
            likePhoto={likePhoto}
            unlikePhoto={unlikePhoto}
            code = {listOfPhotos.code}
            unsplash = {listOfPhotos.unsplash}
          />
          <AddButton
            loadPhotos={loadPhotos}
            code = {listOfPhotos.code}
            unsplash = {listOfPhotos.unsplash}
            counter = {listOfPhotos.counter}
          />
        </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    listOfPhotos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likePhoto: (code, unsplash, id) => dispatch( likePhoto(code, unsplash, id) ),
    unlikePhoto: (code, unsplash, id) => dispatch( unlikePhoto(code, unsplash, id) ),
    loadPhotos: (code, unsplash, counter) => dispatch( loadPhotos(code, unsplash, counter) ),
    addPhotos: (json, counter) => dispatch (addPhotos (json, counter))
  }
}

PhotoApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoApp);

export default PhotoApp;
