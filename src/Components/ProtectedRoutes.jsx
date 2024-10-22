import React, { useState } from "react";
import Outlets from '../Navbar/Outlets'
import { Navigate } from "react-router-dom";
const ProtectedRoute = (value) => {
  if(value){
    <Outlets/>
  }
  else{
    <Navigate to="/"/>
  }
};

export default ProtectedRoute;
