import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/mainlist';
import AddButton from '../components/add-button';
import { likePhoto, loadPhotos, addPhotos } from '../actions';
import firstLoadFromUnsplash from '../unsplash';

class PhotoApp extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const { addPhotos, listOfPhotos } = this.props;
    if ( listOfPhotos.listOfPhotos.length === 0 ) {
      firstLoadFromUnsplash (addPhotos);
    }
  }

  render () {
    let { listOfPhotos, likePhoto, unlikePhoto, loadPhotos} = this.props

    if ( listOfPhotos.listOfPhotos.length === 0 )
      return (<p>Секунду, сейчас все загрузится...</p>);

    return (
      <div>
        <MainList
          listOfPhotos={listOfPhotos.listOfPhotos}
          likePhoto={likePhoto}
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
};


const mapStateToProps = (state) => {
  return {
    listOfPhotos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likePhoto: (code, unsplash, id) => dispatch( likePhoto(code, unsplash, id) ),
    loadPhotos: (code, unsplash, counter) => dispatch( loadPhotos(code, unsplash, counter) ),
    addPhotos: (json, counter, code, unsplash) => dispatch (addPhotos (json, counter, code, unsplash))
  }
}

PhotoApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoApp);

export default PhotoApp;
