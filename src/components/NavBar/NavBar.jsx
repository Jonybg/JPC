import React, { useContext, useState } from "react";
import logo from "../../imgs/logo.png"
import "./navbar.css"
import { IoMenu, IoCart } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuHamburguesa } from "../../Context/Menu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";
import { addToCart } from "../../redux/cart/cartSlice";



export const Navbar = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const { menu, toggleMenu } = useContext(MenuHamburguesa)

  const [cart, setcart] = useState(false)

  const toggleCart = () => {
    setcart(!cart)


  }

  const navigate = useNavigate()

  return (

    <div className=" xl  flex items-center justify-between h-32 bg-slate-700 " >
      <img className="w-32 h-32 cursor-pointer " src={logo} alt="" onClick={() => navigate("/")} />
      <div className="flex">
        <ul className={`xl:flex gap-20 m-10 text-white nav-list ${menu ? "flex" : "hidden"} `}>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="/">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="about">About us</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="contact" >contact</NavLink></li>

        </ul>
        <div className="flex justify-center items-center">
          <IoCart onClick={toggleCart} className="  w-12 h-10 text-white mr-5  cursor-pointer  " />
          <IoMenu onClick={toggleMenu} className=" xl:hidden flex w-12 h-10 text-white mr-5 cursor-pointer  " ></IoMenu>

        </div>

        <div  >


          <div className={`${cart ? "flex" : "hidden"} cart  overflow-y-scroll max-h-[850px]`}>
            <h2 className="text-white" >Tus productos</h2>

            <div className="flex flex-col gap-8 ">
              {cartItems.map(item => (
                <div className="flex bg-slate-500 rounded-xl  gap-5 items-center " key={item.id}>
                  <div>
                    <img className="w-[200px] h-[150px] rounded-lg " src={item.img} alt={item.title} />
                  </div>
                  <div className="text-center flex flex-col gap-3">
                    <p className="text-white ">{item.title}</p>
                    <div className="" >
                      <p className="text-orange-400 text-center text-xl " >{item.price}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <span className=" bg-slate-600 w-7 h-7 rounded-lg cursor-pointer " >-</span>
                      <span>1</span>
                      <span className=" bg-slate-600 w-7 h-7 rounded-lg cursor-pointer " >+</span>
                    </div>

                  </div>

                </div>
              ))}
            </div>


            <span className=" w-full mt-20 border-solid border-[0.5px] border-black"></span>
            <div className="flex gap-32 text-white">
              <p>Total:</p>
              <span>18.3 ETH</span>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-12 rounded-full" >Comprar</button>
            <button onClick={() => dispatch(clearCart())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-full" >Vaciar </button>





          </div>
        </div>

      </div>




    </div >


  )


}