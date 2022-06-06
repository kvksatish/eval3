import React, { createContext } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isAuthorised,setisAuthorised]=useState(false)
  const navigate = useNavigate();
    const login=()=>{
        
            setisAuthorised(true)
        navigate("/Home")
    }
    const logout=()=>{
        setisAuthorised(false)
        
    }
    return <AuthContext.Provider value={{isAuthorised,login,logout}}>{children}</AuthContext.Provider>
  
};
