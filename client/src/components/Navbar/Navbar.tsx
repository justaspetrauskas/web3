import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className="w-full flex md:justify-center justify-between">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar
