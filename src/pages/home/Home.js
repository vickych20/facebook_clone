import React from 'react'
import Topbar from '../../components/navbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feeds from '../../components/feeds/Feeds'
import Right from '../../components/right/Right'
import './home.css'

const Home = () => {
  return (
      <div>
          <Topbar />
          <div className="containerhome">
              <Sidebar />
              <Feeds />
              <Right/>
              
          </div>
    </div>
  )
}

export default Home