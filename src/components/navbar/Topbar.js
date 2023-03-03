import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoNotifications } from "react-icons/io5";
import { BsPersonFill, BsFillChatRightTextFill } from "react-icons/bs";
import img from '../../assets/img.webp';
import './topbar.css';
import {BsFacebook} from 'react-icons/bs'
import { CgMenuGridO } from "react-icons/cg";

const Topbar = () => {
  return (
    <div className="container">
      <div className="left">
        <BsFacebook className="logoi" />
        <span className="cursive">vicky chaudhary</span>
      </div>
      <div className="center">
        <div className="searchbar">
          <CiSearch className="icons" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="right">
        <div className="topbarlinks">
          <span className="topbarlink">HomePages</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconsitems">
            <CgMenuGridO />
            <span className="topbariconbages">2</span>
          </div>
          <div className="topbariconsitems">
            {/* <CgMenuGridO/> */}
            <BsPersonFill />
            <span className="topbariconbages">1</span>
          </div>
          <div className="topbariconsitems">
            <BsFillChatRightTextFill />
            <span className="topbariconbages">7</span>
          </div>
          <div className="topbariconsitems">
            <IoNotifications />
            <span className="topbariconbages">4</span>
          </div>
        </div>
        <img src={img} alt="" className="topimg" />
      </div>
    </div>
  );
}

export default Topbar