import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/mainlist';
import AddButton from '../components/add-button';
import { likePhoto, unlikePhoto, loadPhotos, addPhotos } from '../actions';
import Unsplash from 'unsplash-js';
import { loadState } from '../localestorage';

class PhotoApp extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const { addPhotos, listOfPhotos } = this.props;
    if ( listOfPhotos.listOfPhotos.length === 0 ) {
      var unsplash = new Unsplash({
        applicationId: "e4139046c1f47dffb34a77d3bf568bcc4ae568c6070b8210a2e529d16881fcec",
        secret: "8e374945a4007e2d9b2bd8185d2377368d128bf87f9298dd66aa463fe2562596",
        callbackUrl: "http://bgatesmf.bget.ru/auth"
      });
      const loadedState = loadState();
      const code = (loadedState) ? loadedState.code : location.search.split('code=')[1];
      if ( code ) {
        try {
          if ( loadedState ) {
            unsplash.auth.setBearerToken(loadedState.bearerToken);
            addPhotos (loadedState.listOfPhotos, loadedState.counter-1, code, unsplash); }
          else {
            unsplash.auth.userAuthentication(code)
              .then(res => res.json() )
              .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                unsplash.photos.listPhotos(1, 10, "latest")
                  .then(res => res.json())
                  .then(json => { addPhotos ( json, 1, code, unsplash )} );
              })};
        } catch (e) { console.log("При загрузке фотографий произошла ошибка: "+e);  };
      } else console.log("Не удалось получить данные от Unsplash, попробуйте перезагрузить страницу или зайдите попозже...");
    }
}

  render () {
    let { listOfPhotos, likePhoto, unlikePhoto, loadPhotos} = this.props

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
