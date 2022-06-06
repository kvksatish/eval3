import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink


const Navbar = () => {
  const navigate = useNavigate();
  
  const {isAuthorised,logout} = useContext(AuthContext)
  const handleLogin=()=>{

    if(isAuthorised){
      logout()
      navigate("/Home")

    }
    else{
      navigate("/Login")
    }
    
  }
  return (
    <div data-cy="navbar">
      <Link to="/Home" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLogin}  data-cy="navbar-login-logout-button">{isAuthorised ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default Navbar;
