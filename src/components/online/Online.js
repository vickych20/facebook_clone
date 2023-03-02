import React from 'react';
import './online.css';
import pl from "../../assets/lo.jpg";




const Online = ({user}) => {
  return (
    <li className="rightbarfriends">
      <div className="rightbarimgcontainer">
        <img
          src={user.photo}
          alt=""
          className="rightbarprofileimg
              "
        />
        <span className="rightbaronline"></span>
      </div>
      <div className="rightbarusername">{user.username}</div>
    </li>
  );
}

export default Online;