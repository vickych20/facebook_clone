import React from 'react'
import './dost.css';

const Dost = ({ friends }) => {
  return (
    <div>
      <h1></h1>
      <li className="sidebarfriends">
        <img src={friends.image} alt="" className="img11" />
        <span className="sidebarfriendsname">{friends.name}</span>
      </li>
    </div>
  );
};

export default Dost