import React from 'react';
import '../Style/dashboardStyle.css';
import SideNavBar from './SideNavBar';
import RoutingArea from './RoutingArea';

const Dashboard = () => {

  return (
    <div className='dashboard-area'>
      <SideNavBar />
      <RoutingArea />
    </div>
  )
}

export default Dashboard