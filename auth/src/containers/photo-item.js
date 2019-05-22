import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { likePhoto, unlikePhoto, loadPhotos, addPhotos } from '../actions';
import Description from '../components/description';

let PhotoItem = (props) => {

  let { id } = props.match.params;
  let { listOfPhotos, code, unsplash } = props;

  return (
    listOfPhotos.listOfPhotos.map (item => {
      if ( item.id === id ) {
        return (
          <div
            className="photo-item"
          >
            <Link to="/">
              <img
                src={item.urls.regular}
                alt={item.alt_description}
              />
            </Link>
            <Description
                item={item}
                likePhoto={likePhoto}
                unlikePhoto={unlikePhoto}
                code = {code}
                unsplash = {unsplash}
            />
          </div>
        )
      }
    })
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
    addPhotos: (json, counter) => dispatch (addPhotos (json, counter))
  }
}

PhotoItem = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoItem);

export default PhotoItem;
