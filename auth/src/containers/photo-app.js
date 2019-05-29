import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/mainlist';
import AddButton from '../components/add-button';
import { likePhoto, unlikePhoto, loadPhotos, addPhotos } from '../actions';


let PhotoApp = (props) => {

  let { listOfPhotos, likePhoto, unlikePhoto, loadPhotos } = props

  if ( listOfPhotos.listOfPhotos.length === 0 ) {
    return (<div>
              <p>Секунду, сейчас все загрузится...</p>
            </div>)
  };

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
    addPhotos: (json, counter, code, unsplash) => dispatch (addPhotos (json, counter, code, unsplash))
  }
}

PhotoApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoApp);

export default PhotoApp;
