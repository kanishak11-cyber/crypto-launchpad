import Image from 'next/image';
import React from 'react';
import Promoted from './Promoted';
import banner from '../Assets/banner.jpg';
import { FaTelegram, FaTelegramPlane, FaTrophy} from 'react-icons/fa';
import {BsFillMicFill, BsNewspaper, BsShieldLockFill} from 'react-icons/bs';
import logo from '../Assets/logo.png';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { useRouter } from 'next/router'
import Today from './Today';
const Welcome = () => {

    const router = useRouter();
    return (
        <div className='text-stone-200 flex flex-1 flex-row m-2 ms:hidden text-center items-center '>
            <div className='flex flex-1 flex-row w-full  h-full p-3 '>
          <button type="button" onClick={() => <Today/>} className=' p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><FaTrophy /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold   '> Today&apos;s best </h2>
            </button>
            <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><BsShieldLockFill /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> Audit </h2>
            </button>
            {/* <button className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><BiShieldQuarter /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> KYC </h2>
            </button> */}
            <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><HiOutlineSpeakerphone /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> Promote </h2>
            </button>
            <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><BsFillMicFill /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> AMA </h2>
                </button>
                <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><FaTelegramPlane /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> Airdrop </h2>
                </button>
                {/* <button className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><BsImages/></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> NFT </h2>
                </button> */}
                <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold '><BsNewspaper /></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> Blog </h2>
                </button>
                <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <Image src={logo} width={30} height={30} alt='coin'/>
                    <h2 className='mr-1 p-1 text-m font-semibold text-yellow-400  '> LaunchPad <span className='text-white'>Token</span> </h2>
                </button>
                <button type="button" onClick={() => router.push('/about')} className='w-60 p-3 flex-row flex Justify-center flex-1 white-glassmorphism m-2 '>
                    <h1 className='mr-1 p-1 text-2xl font-semibold  '><FaTelegram className='text-blue-400'/></h1>
                    <h2 className='mr-1 p-1 text-m font-semibold  '> Join Our Group </h2>
                </button>
                
            </div>
        </div>
    );
};

export default Welcome;
