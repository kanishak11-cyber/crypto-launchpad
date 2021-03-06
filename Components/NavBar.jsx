import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Promoted from './Promoted';

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className=''>
            <div className='w-full  flex-initial md:justify-center justify-between items-center p-4'>
                <div className='md:flex-[0.5] justify-between items-center'>
                    <div className='flex flex-1 flex-row'>
                        <div className='flex-row flex-1 flex  '>
                            <div className=' mt-3 ml-5 w-20 h-20 items-center justify-between '>
                                <Image src={logo} alt='logo'

                                    className=' cursor-pointer' />
                            </div>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold '>
                                    Crypto
                                </h1>
                                <h1 className='text-yellow-400 text-2xl font-bold '>
                                    LaunchPad
                                </h1>
                            </div>
                        </div>
                        <div className='white-glassmorphism w-40 h-20 text-white p-2 text-left text-sm flex flex-col '>
                            <h1 className='text-yellow-400'>Crypto<span className='text-white ml-2'>Launchpad</span></h1>
                            <h2>$0.0000</h2>
                        </div>
                        <div className='blue-glassmorphism h-12 mt-5 m-3 flex flex-1 items-center p-2 rounded-full'>
                            <div className="text-white justify-between  items-center  ">
                                <SearchIcon className="text-white " />
                            </div>
                            <input
                                type="text"
                                placeholder="Coin, Symbol... "
                                className="bg-transparent border-none w-full text-[#eee] p-3 font-medium " />
                        </div>

                        <div className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial mr-2'>
                            <button className='ml-5' onClick={`${<Promoted/>}`}>Promote </button>
                            <button className='ml-5'>Add Coin </button>
                            <button className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</button>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                        : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <div className='text-xl w-fdivl my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default NavBar;
