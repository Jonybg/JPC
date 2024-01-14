import React, { useContext, useState } from "react";
import logo from "../../imgs/logo.png";
import "./navbar.css";
import { IoMenu, IoCart } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuHamburguesa } from "../../Context/Menu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addToCart, removeFromCart } from "../../redux/cart/cartSlice";
import { removeItemFromCart } from "../../redux/cart/cart-utils";

export const Navbar = ({ quantity, id }) => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { menu, toggleMenu } = useContext(MenuHamburguesa);
  const [cart, setCart] = useState(false);
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (title) => {
    dispatch(addToCart({ title }));
  };

  const handleRemoveFromCart = (title) => {

    dispatch(removeFromCart({ title }));
  };

  const toggleCart = () => {
    setCart(!cart);
  };

  const handleBuy = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setShowThanksMessage(true);
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      const priceWithoutDollar = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
      const itemTotal = priceWithoutDollar * item.quantity;
      return acc + itemTotal;
    }, 0);
    return total;
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="xl flex items-center justify-between h-32 bg-slate-700">
      <img className="w-32 h-32 cursor-pointer" src={logo} alt="" onClick={() => navigate("/")} />
      <div className="flex">
        <ul className={`xl:flex gap-20 m-10 text-white nav-list ${menu ? "flex" : "hidden"}`}>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "white" })} to="contact">
              contact
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <IoCart onClick={toggleCart} className="w-12 h-10 text-white cursor-pointer">
            {cartItems.length > 0 && (
              <span className="bg-red-500 text-white rounded-full absolute bottom-0 right-0 p-1">
                {calculateTotalItems()}
              </span>
            )}
          </IoCart>
          <div className="relative">
            {calculateTotalItems() > 0 && (
              <div className="absolute -bottom-8 -right-0 bg-red-500 text-white px-3 rounded-full cursor-pointer">
                {calculateTotalItems()}
              </div>
            )}
          </div>
          <IoMenu onClick={toggleMenu} className="xl:hidden flex w-12 h-10 text-white mr-5 cursor-pointer"></IoMenu>
        </div>

        <div>
          <div className={`${cart ? "flex" : "hidden"} cart `}>
            <h2 className="text-white">Tus productos</h2>
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <div className="flex bg-slate-500 rounded-xl gap-5 items-center" key={item.id}>
                  <div>
                    <img className="w-[200px] h-[150px] rounded-lg" src={item.img} alt={item.title} />
                  </div>
                  <div className="text-center flex flex-col gap-3">
                    <p className="text-white ">{item.title}</p>
                    <div className="">
                      <p className="text-orange-400 text-center text-xl ">{item.price}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <span
                        onClick={() => handleRemoveFromCart(item.title)}
                        className="bg-slate-600 w-7 h-7 rounded-lg cursor-pointer"
                      >
                        -
                      </span>
                      <span>{item.quantity}</span>
                      <span
                        onClick={() => handleAddToCart(item.title)}
                        className="bg-slate-600 w-7 h-7 rounded-lg cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <span className="w-full mt-20 border-solid border-[0.5px] border-black"></span>
            <div className="flex gap-32 text-white">
              <p>Total:</p>
              <span>{calculateTotal()} USD</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full" onClick={handleBuy}>
              Comprar
            </button>
            <button
              onClick={() => {
                dispatch(clearCart());
                setShowThanksMessage(false);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-full"
            >
              Vaciar
            </button>
            {showThanksMessage && <p>¡Gracias por su compra!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
