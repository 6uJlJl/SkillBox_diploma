import React from 'react';
import { Link } from 'react-router-dom'

import Description from './description';

const MainList = (props) => {
    let {
      listOfPhotos,
      likePhoto,
      unlikePhoto,
      code,
      unsplash
    } = props;

    return (
      <div>
        {
          listOfPhotos.map ( item => {
              return (
                <div className="post">
                  <Link to={`/image/${item.id}`} >
                    <img
                      src={item.urls.small}
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
