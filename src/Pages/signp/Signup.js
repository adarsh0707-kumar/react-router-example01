import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const signUpHandler = () => {
        navigate('/login');
    }
    return (
        <div style={{ width: '100%', height: '100vh', background: 'blue' }}>
            <h1>SignUp Page</h1>
            <button onClick={signUpHandler}>Sign Up</button>
        </div>
    )
}

export default Signup;