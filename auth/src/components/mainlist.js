import React from 'react';
import { Link } from 'react-router-dom'

import Description from './description';
import { saveScroll } from "../localestorage";

const MainList = (props) => {
    let { listOfPhotos, likePhoto, unlikePhoto, code, unsplash } = props;
    return (
      <div className = "elements-container" style={{"height": $(".elements-gride").height()}}>
        {
          listOfPhotos.map ( item => {
              let selfheight = item.selfheight + "px";
              return (
                <div className="element-item" style={{"order":item.order}}>
                  <Link to={`/image/${item.id}`} onClick={()=>{saveScroll()}} >
                    <img
                      className="post-image"
                      style={{"height":selfheight}}
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
            })
        }
      </div>
    )
}

export default MainList;
