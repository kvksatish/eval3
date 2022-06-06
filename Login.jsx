import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'



const Login = () => {    
  const {login} = useContext(AuthContext)
  const [hlogin, setlogin] = useState({})
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    
    e.preventDefault();
    login()
    
  }
  const handleChange = (e)=>{

    const { name, value }=e.target;
    setlogin({
      ...hlogin,
      [name]:value 
    })

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
    
      <input onChange={handleChange} data-cy="login-email" type="email"  placeholder="Enter email id"/>
      <input onChange={handleChange} data-cy="login-password" type="password" />
      <button type="submit" data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
