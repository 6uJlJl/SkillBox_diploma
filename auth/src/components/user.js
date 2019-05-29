import React from 'react';

const User = ( {item} ) => {
  return (
    <div className="user">
      <div className = "user_name" >
        <a href={item.user.links.html} >
          <img
            className = "profile_image"
            src={item.user.profile_image.small}
            alt={item.user.name}
          />
          <div className="user_name_text">
            {item.user.name}
          </div>
        </a>
      </div>
    </div>
  )
}

export default User;
