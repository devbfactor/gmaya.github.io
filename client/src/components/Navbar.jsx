import { useState } from 'react';
import logo from '../assets/gmaya_logo.png';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 px-5">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-36 cursor-pointer"/>
      </div>
      <button className="bg-[#fbec5d] py-2 px-7 rounded-full cursor-pointer hover:bg-[#ffff31]">
        <p className="text-gray-900 text-base font-semibold">Connect Wallet</p>
      </button>
    </nav>
  )
}

export default Navbar