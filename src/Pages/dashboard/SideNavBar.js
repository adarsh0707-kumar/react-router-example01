import React from 'react'
import '../Style/dashboardStyle.css'
import { Link } from 'react-router-dom'


const SideNavBar = () => {
    return (
        <div className='dashboard-SideNaveBar'>
            <Link className='link' to='/dashboard/home'>Home</Link>
            <Link className='link' to='/dashboard/student'>Student List</Link>
            <Link className='link' to='/dashboard/faculty'>Faculty List</Link>
            <Link className='link' to='/login'>LogOut</Link>
        </div>
    )
}

export default SideNavBar