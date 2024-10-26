import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import '../Style/FacultyStyle.css'

const Faculty = () => {
    const navigate = useNavigate;
    const facultyListHandler = () => {
        navigate('/dashboard/faculty/faculty-list');
    }
    const addFacultyHandler = () => {
        navigate('/dashboard/faculty/add-faculty');
    }
    return (

        <div className='facultyArea'>
            <div className='facultyArea-navBar'>
                <button onClick={facultyListHandler}>Faculty List</button>
                <button onClick={addFacultyHandler}>Add Faculty</button>
            </div>
            <Outlet />
        </div>
    );

}

export default Faculty