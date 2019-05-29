import React from 'react';

import User from './user';
import Date from './date';
import Likes from './likes';

const Description = (props) => {
  let { item, likePhoto, unlikePhoto, code, unsplash } = props;
  return (
    <div className = "description"  >
      <User item={item} />
      <Date date={item.created_at.slice(0,10)} />
      <Likes
        likes={item.likes}
        isLiked={item.liked_by_user}
        likePhoto={likePhoto}
        unlikePhoto={unlikePhoto}
        code={code}
        unsplash={unsplash}
        id={item.id}
      />
    </div>
  )
};

export default Description;
