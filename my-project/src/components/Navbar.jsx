import React from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import search from '../assets/search.jpg'
import profile from '../assets/profile.jpg'
import {Link} from 'react-router-dom'
import cart from '../assets/cart.png';
import menu from '../assets/menu.png'
import { useState } from 'react';
import dropdown from '../assets/dropdown.png'

function Navbar() {
    const [visible,setVisible] = useState(false);
    return (
        <div className='flex items-center justify-between  font-medium'>
            <img src={logo} alt="" className='w-28' />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className="flex flex-col items-center gap-1" >
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1" >
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1" >
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1" >
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={search} className='w-10 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={profile} className='w-8 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={cart} className ='w-10'alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={()=>setVisible(true)} src={menu} className='w-10 cursor-pointer sm:hidden' alt="" />
            </div>
            {/* Sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img src={dropdown} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar