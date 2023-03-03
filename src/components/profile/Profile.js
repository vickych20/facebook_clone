import React from "react";
import "./profile.css";
import Topbar from "../../components/navbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feeds from "../../components/feeds/Feeds";
import Right from "../../components/right/Right";
import "./profile.css";
import Share from "../share/Share";
import c from '../../assets/cf.jpg';
import c1 from '../../assets/c1.jpg';

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img src={c} alt="" className="profilecoverimg" />

              <img src={c1} alt="" className="profileusewrrimg" />
            </div>
            <div className="profileinformation">
              <h4 className="proname">vicky chaudhary</h4>
              <span className="prodesc">
                "A computer is like a mischievous genie.it will give you exactly
                what you ask for,but not always what you want."-Joe Sondow !!
              </span>
            </div>
            .
          </div>
          <div className="profilerightbuttom">
            <Feeds />
            <Right profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
