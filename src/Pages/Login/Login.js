import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('/dashboard');
    sessionStorage.setItem('isLogin', true);
  }
  const signinHandler = () => {
    navigate('/signup');
  }

  return (
    <div style={{ width: '100%', height: '100vh', background: 'red' }}>
      <h1>Login Page</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={signinHandler}>Create an account</button>
    </div>
  )
}

export default Login