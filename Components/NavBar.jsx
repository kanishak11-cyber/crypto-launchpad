import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@material-ui/icons/Search';

// import Search from '../Assets/search.svg'


const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer${classProps}`}>
            {title}
        </li>
    )
}

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className=''>
            <div className='w-full  flex-initial md:justify-center  items-center p-4'>
                <div className='md:flex-[0.5] items-center'>
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
                        <div className='blue-glassmorphism h-12 mt-5 m-3 flex flex-1 items-center p-2 rounded-full'>
                            <div className="text-white justify-between  items-center  ">
                                <SearchIcon className="text-white " />
                            </div>
                            <input
                                type="text"
                                placeholder="Coin, Symbol... "
                                className="bg-transparent border-none w-fdivl text-[#eee] p-3 font-medium " />
                        </div>

                        <div className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial mr-2'>
                            <button className='mr-5'>Promote </button>
                            <button className='mr-5'>Add Coin </button>
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
                            {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((item, index) => (
                                <NavbarItem
                                    key={item + index} title={item}
                                    classProps={'my-2 text-lg'}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default NavBar;
