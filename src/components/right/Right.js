import React from 'react';
import './right.css';
import bth from '../../assets/btd.webp'
import ad from '../../assets/mop.webp'
import pl from '../../assets/lo.jpg'
import user from '../../dummydata';
import Online from '../online/Online';
import c from '../../assets/c.jpg'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/cf.jpg'
import c4 from '../../assets/d3.jpg'
import Profile from '../profile/Profile';
import Home from '../../pages/home/Home';

const Right = ({ profile }) => {







  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src={bth} alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Ravi kumar</b> and 3 other friends have a birthday today
          </span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfrientslist">
          {user.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  }


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User information</h4>
        <div className="rightbarinformation">
          <div className="rightbarinfoitem">
            <span className="rightinfokey">City::</span>
            <span className="rightinfovalue">India</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightinfokey">From:</span>
            <span className="rightinfovalue">Delhi</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightinfokey">RelationShip:</span>
            <span className="rightinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src={c} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          <div className="rightbarfollowing">
            <img src={c1} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          <div className="rightbarfollowing">
            <img src={c2} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          <div className="rightbarfollowing">
            <img src={c3} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          <div className="rightbarfollowing">
            <img src={c4} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          <div className="rightbarfollowing">
            <img src={c} alt="" className="righbarfollingimg" />
            <span className="rightbarFollingname">John Center</span>

          </div>
          
          
        </div>
      </>
    );
  }










  return (
    <div className="rights">
      <div className="rightwrapper">
        {Profile ? <HomeRightbar /> : <ProfileRightbar />}

        {/* <ProfileRightbar /> */}
      </div>
    </div>
  );
};

export default Right