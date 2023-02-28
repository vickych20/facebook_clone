import React from "react";
import "./share.css";
import ik from "../../assets/ik.jpg";
import { MdPhotoLibrary } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={ik} alt="" className="shareprofileimages" />
          <input
            placeholder="what`s in your mind Safak ?"
            className="shareinput"
          />
        </div>
        <hr className="sharehr" />
        <div className="sharebutton">
          <div className="shareOptions">
            <div className="shareoption">
              <MdPhotoLibrary className="shareicons col" />
              <span className="shareoptiontext">photo or video</span>
            </div>
            <div className="shareoption">
              <AiFillTag className="shareicons col1" />
              <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
              <ImLocation2 className="shareicons col2" />
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
              <BsFillEmojiSmileFill className="shareicons col3" />
              <span className="shareoptiontext">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
