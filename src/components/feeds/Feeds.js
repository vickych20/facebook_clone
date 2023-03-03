import React, { useState } from "react";
import "./feeds.css";
import Share from "../share/Share";
import Post from "../post/Post";
import user from "../../dummydata";

import "../post/post.css";
import { FiMoreVertical } from "react-icons/fi";
import p from "../../assets/p.jpg";
import mr from "../../assets/mr.webp";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import l from "../../assets/lk.png";











const Feeds = () => {
  // const [data, setData] = useState(user);

  return (
    <div className="feed">
      <div className="feedwrap">
        <Share />
        {user &&
          user.map((i, key) => {
           
            return (
              <>
                {" "}
                <div className="post">
                  <div className="postwrapper">
                    <div className="posttop">
                      <div className="posttopleft">
                        <img src={i.photo} alt="" className="postprofileimg" />
                        <span className="postusername">{i.username}</span>
                        <span className="postdate">{i.date} min ago</span>
                      </div>
                      <div className="posttopright">
                        <FiMoreVertical />
                      </div>
                    </div>
                    <div className="postcenter">
                      <span className="posttext">{i.desc}</span>
                      <img src={i.photo} alt="" className="postimages" />
                    </div>
                    <div className="postbuttom">
                      <div className="buttomleft">
                        <img src={l} alt="" className="imgicon"/>
                        <AiFillLike className="likke" />
                        <FcLike />
                        <span className="postlikecounter">
                          {i.like} people liked it
                        </span>
                      </div>
                      <div className="podtbuttomright">
                        <span className="postcommenttext">
                          {i.comment} comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Feeds;
