import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/mainlist';
import AddButton from '../components/add-button';
import { likePhoto, unlikePhoto, loadPhotos, addPhotos, resizeWindow } from '../actions';
import firstLoadFromUnsplash from '../unsplash';
import { saveScroll, LoadScroll } from "../localestorage";

class PhotoApp extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const { addPhotos, listOfPhotos, resizeWindow } = this.props;
    if ( listOfPhotos.listOfPhotos.length === 0 )
      firstLoadFromUnsplash (addPhotos);
    else
      resizeWindow(listOfPhotos.listOfPhotos);

    window.addEventListener("resize", () => {
      this.props.resizeWindow (this.props.listOfPhotos.listOfPhotos);
    });
  }

  render () {
    let { listOfPhotos, likePhoto, unlikePhoto, loadPhotos } = this.props
    LoadScroll();

    if ( listOfPhotos.listOfPhotos.length === 0 )
      return (<div className="loading-wrapper"><div className="loading"></div></div>);

    return (
      <div>

        <MainList
          listOfPhotos={listOfPhotos.listOfPhotos}
          likePhoto={likePhoto}
          unlikePhoto = {unlikePhoto}
          code = {listOfPhotos.code}
          unsplash = {listOfPhotos.unsplash}
          isFetching = {listOfPhotos.isFetching}
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
}

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
    addPhotos: (json, counter, code, unsplash) => dispatch ( addPhotos (json, counter, code, unsplash) ),
    resizeWindow : (listOfPhotos) => dispatch ( resizeWindow (listOfPhotos) )
  }
}

PhotoApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoApp);

export default PhotoApp;
