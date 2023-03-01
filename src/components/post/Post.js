import React from 'react'
import './post.css';
import { FiMoreVertical } from 'react-icons/fi';
import p from '../../assets/p.jpg'
import mr from '../../assets/mr.webp'
import like from '../../assets/like.jpg'

const Post = (post) => {
    
  return (
      <div className='post'>
          <div className="postwrapper">
              <div className="posttop">
                  <div className="posttopleft">
                      <img src={p} alt="" className="postprofileimg" />
                      <span className="postusername">Ravi kumar</span>
                      <span className="postdate">5 min ago</span>
                  </div>
                  <div className="posttopright">
                      <FiMoreVertical/>
                      
                  </div>
              </div>
              <div className="postcenter">
                  <span className="posttext">Hey! Its my first post:</span>
                  <img src={mr} alt=""  className='postimages'/>
              </div>
              <div className="postbuttom">
                  <div className="buttomleft">
                      <img src={like} alt="" className="likeicon" />
                      <span className="postlikecounter">32 people liked it</span>
                  </div>
                  <div className="podtbuttomright">
                      <span className="postcommenttext">9 comments</span>
                  </div>
              </div>
          </div>
          
          
    </div>
  )
}

export default Post