import React, { useState } from 'react'
import './post.css';
import { FiMoreVertical } from 'react-icons/fi';
import p from '../../assets/p.jpg'
import mr from '../../assets/mr.webp'
import user from '../../dummydata';
import { AiFillLike } from 'react-icons/ai';
import { FcLike } from "react-icons/fc";
import l from '../../assets/lk.png'

const Post = ({ post }) => {
    const [like, setLike] = useState(1);
    const [isLiked, setIsLiked] = useState(false);



    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    };
    
    
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src={p} alt="" className="postprofileimg" />
            <span className="postusername">Ravi kumar</span>
            <span className="postdate">5 min ago</span>
          </div>
          <div className="posttopright">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">Hey! Its my first post:</span>
          <img src={mr} alt="" className="postimages" />
        </div>
        <div className="postbuttom">
          <div className="buttomleft">
            <img src={l} alt="" onClick={likeHandler} />
            <AiFillLike className="likke" onClick={likeHandler} />
            <FcLike onClick={likeHandler} />
            <span className="postlikecounter"> {like} people liked it</span>
          </div>
          <div className="podtbuttomright">
            <span className="postcommenttext">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post