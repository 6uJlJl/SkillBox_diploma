import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { likePhoto, loadPhotos, addPhotos } from '../actions';
import Description from '../components/description';

let PhotoItem = (props) => {

  let { id } = props.match.params;
  let { listOfPhotos, likePhoto, unlikePhoto } = props;

  return (
    listOfPhotos.listOfPhotos.map (item => {
      if ( item.id === id ) {
        return (
          <div className="photo-item-container">
            <Link to="/"><i className="back fas fa-chevron-left"/></Link>
            <div className="photo-item" >
              <Link to="/">
                <img
                  className="item-img"
                  src={item.urls.regular}
                  alt={item.alt_description}
                />
              </Link>
              <Description
                  item={item}
                  likePhoto={likePhoto}
                  code = {listOfPhotos.code}
                  unsplash = {listOfPhotos.unsplash}
              />
            </div>
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
    loadPhotos: (code, unsplash, counter) => dispatch( loadPhotos(code, unsplash, counter) ),
    addPhotos: (json, counter, code, unsplash) => dispatch (addPhotos (json, counter, code, unsplash))
  }
}

PhotoItem = connect (
  mapStateToProps,
  mapDispatchToProps
)(PhotoItem);

export default PhotoItem;
