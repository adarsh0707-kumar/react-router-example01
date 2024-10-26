import React from 'react'
import '../Style/dashboardStyle.css'
import { Link, useNavigate } from 'react-router-dom'


const SideNavBar = () => {
    const navigate = useNavigate();
    const logOutHandler = () => {
        navigate('/login');
        sessionStorage.clear();
    }

    return (
        <div className='dashboard-SideNaveBar'>
            <Link className='link' to='/dashboard/home'>Home</Link>
            <Link className='link' to='/dashboard/student'>Student List</Link>
            <Link className='link' to='/dashboard/faculty'>Faculty List</Link>
            <button className='link' onClick={logOutHandler}>LogOut</button>
        </div>
    )
}

export default SideNavBar