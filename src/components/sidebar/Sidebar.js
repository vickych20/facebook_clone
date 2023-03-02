import React from 'react';
import './sidebar.css';
import friends from "../../priengs";
import { MdOutlineRssFeed } from 'react-icons/md';
import { BsFillChatRightTextFill } from "react-icons/bs";
import { RiVideoChatFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import mr from '../../assets/mr.webp'
import { MdEventSeat } from "react-icons/md";
import Dost from '../dost/Dost'
import { MdSwitchAccount } from "react-icons/md";
import {
  BsFillBookmarkFill,
  BsFillQuestionSquareFill,
  BsFillBagDashFill,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitems">
            <MdOutlineRssFeed />
            <span className="sidebaritemstext">Feed</span>
          </li>
          <li className="sidebarlistitems">
            <BsFillChatRightTextFill />
            <span className="sidebaritemstext">Chat</span>
          </li>
          <li className="sidebarlistitems">
            <RiVideoChatFill />
            <span className="sidebaritemstext">Video</span>
          </li>
          <li className="sidebarlistitems">
            <HiUserGroup />
            <span className="sidebaritemstext">Group</span>
          </li>
          <li className="sidebarlistitems">
            <BsFillBookmarkFill />
            <span className="sidebaritemstext">Bookmarks</span>
          </li>
          <li className="sidebarlistitems">
            <BsFillBagDashFill />
            <span className="sidebaritemstext">Jobs</span>
          </li>
          <li className="sidebarlistitems">
            <BsFillQuestionSquareFill />
            <span className="sidebaritemstext">Questions</span>
          </li>
          <li className="sidebarlistitems">
            <MdEventSeat />
            <span className="sidebaritemstext">Events</span>
          </li>
          <li className="sidebarlistitems">
            <MdSwitchAccount />
            <span className="sidebaritemstext">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr" />
              <ul className="sidebarfriendslist">
                  <h3 className='frientslistname'>friends</h3>
          {friends.map((v) => (
            <Dost key={v.id} friends={v} />
          ))}

          {/* <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane Doe</span>
                  </li>
              </ul>
              <ul className="sidebarfriendslist">
                  <li className="sidebarfriends">
                      <img src={mr} alt=""  className='img11'/>
                      <span className="sidebarfriendsname">Jane  Doe</span>
                  </li>
              </ul> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar