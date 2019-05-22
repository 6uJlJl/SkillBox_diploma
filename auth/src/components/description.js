import React from 'react';

const Description = (props) => {
  let { item, likePhoto, unlikePhoto, code, unsplash } = props;
  let className = item.liked_by_user ? "red-svg" : "white-svg";
  return (
    <div
      className = "description"
    >
      <div className="user">
        <div className = "user_name" >
          <a href={item.user.links.html} >
            <img
              src={item.user.profile_image.small}
              alt={item.user.name}
              className = "profile_image"
            />
            <div className="user_name_text">
              {item.user.name}
            </div>
          </a>
        </div>
      </div>
      <div className = "date">
        Дата публикации:<br />
        {item.created_at.slice(0,10)}
      </div>
      <div className = "likes">
        <span>
          {item.likes}&nbsp;
        </span>
        <svg
          version="1.1"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          aria-hidden="false"
          className={className}
          onClick={ev => { item.liked_by_user
                           ? unlikePhoto(code, unsplash, item.id)
                           : likePhoto(code, unsplash, item.id)
          }}
        >
        <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z">
        </path></svg>
      </div>
    </div>  )
};

export default Description;
