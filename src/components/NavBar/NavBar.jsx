import React, { useContext, useState } from "react";
import logo from "../../imgs/logo.png"
import "./navbar.css"
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuHamburguesa } from "../../Context/Menu";


export const Navbar = () => {

  const { menu, toggleMenu } = useContext(MenuHamburguesa)

  const navigate = useNavigate()

  return (

    <div className=" xl  flex items-center justify-between h-32 bg-slate-700 " >
      <img className="w-32 h-32 cursor-pointer " src={logo} alt="" onClick={() => navigate("/")} />
      <div>
        <ul className={`xl:flex gap-20 m-10 text-white nav-list ${menu ? "flex" : "hidden"} `}>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="/">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="products">Products</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="about">About us</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="contact" >contact</NavLink></li>

        </ul>
        <IoMenu onClick={toggleMenu} className=" xl:hidden flex w-12 h-80 text-white mr-5 cursor-pointer  " ></IoMenu>



      </div>


    </div >


  )

}