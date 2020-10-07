import React from 'react'
import {
    Link
  } from "react-router-dom";

const Home = () => {
  return (
  <div>Home 
    <Link to="/users/login">Login</Link>
    <Link to="/users/register">Register</Link>
  </div>
  )
}

export default Home;