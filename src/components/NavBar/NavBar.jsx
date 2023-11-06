import React from "react";
import logo from "../../imgs/logo.png"
import "./navbar.css"




export const Navbar = () => {
  return (
    <div className=" xl  flex items-center justify-between h-32 bg-slate-700 " >
      <img className="w-32 h-32  " src={logo} alt="" />
      <div>
        <ul className="flex gap-20 m-10 text-white noimage " >
          <li><a href="#">Productos</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
  )

}