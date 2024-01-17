import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa'
const Navber = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
                Best <span className='font-bold text-[#F97316]'>Food </span>
            </h1>
            <div className='hidden ml-2 lg:flex items-center bg-gray-200 rounded-full text-[14px]'>
                <p className='bg-orange-500 text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text"placeholder='Search food'/>
        </div>

        <button className='bg-orange-500 border-orange-500 text-white hidden md:flex items-center py-2 px-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* mobile menu */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        

        

        {/* side drawer menu  */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold text-orange-500'>Food</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <TbTruckDelivery size={25} className='mr-4 text-orange-500'/> Orders</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <MdFavorite size={25} className='mr-4 text-orange-500'/> Favorites</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <FaWallet size={25} className='mr-4 text-orange-500'/> Wallet</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <MdHelp size={25} className='mr-4 text-orange-500'/> Help</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <AiFillTag size={25} className='mr-4 text-orange-500'/> Promotions</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <BsFillSaveFill size={25} className='mr-4 text-orange-500'/> Best Ones</li>
                    <li className='text-xl py-4 flex hover:text-orange-600 cursor-pointer duration-700'> <FaUserFriends size={25} className='mr-4 text-orange-500'/> Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navber