import React from 'react';
import { Link } from 'react-router-dom'

import Description from './description';

const MainList = (props) => {
    let { listOfPhotos, likePhoto, code, unsplash } = props;
    return (
      <div className = "elements-container" style={{"height": $(".elements-gride").height()}}>
        {
          listOfPhotos.map ( item => {
              return (
                <div className="element-item" style={{"order":item.order}}>
                  <Link to={`/image/${item.id}`} >
                    <img
                      className="post-image"
                      src={item.urls.regular}
                      alt={item.alt_description}
                    />
                  </Link>
                  <Description
                      item={item}
                      likePhoto={likePhoto}
                      code = {code}
                      unsplash = {unsplash}
                  />
                </div>
              )
            })
        }
      </div>
    )
}

export default MainList;
