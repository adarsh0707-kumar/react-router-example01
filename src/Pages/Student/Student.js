import React from 'react';
import '../Style/StudentStyle.css'
import { Outlet, useNavigate } from 'react-router-dom';

const Student = () => {
    const navigate = useNavigate();
    const studentListHandler = () => {
        navigate('/dashboard/student/student-list');
    }
    const addStudentHandler = () => {
        navigate('/dashboard/student/add-student');
    }
    return (

        <div className='studentArea'>
            <div className='studentArea-navBar'>
                <button onClick={studentListHandler}>Student List</button>
                <button onClick={addStudentHandler}>Add Student</button>
            </div>
            <Outlet />
        </div>


    )
}

export default Student