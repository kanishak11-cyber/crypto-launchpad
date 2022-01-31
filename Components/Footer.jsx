import React from 'react';
import { FaFacebookSquare, FaRedditSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-white gradient-bg-footer justify-center'>
        <div className=' flex flex-row flex-1 p-5'>
            <div className='flex flex-col flex-1 p-2 text-center text-xl w-1/3 justify-between'>
                <a href='' className='m-1'>Promote</a>
                <a href='' className='m-1'>Contact Us</a>
                <a href='' className='m-1'>Documentation</a>
                <a href='' className='m-1'>Terms</a>
                <a href='' className='m-1'>Privacy</a>
                <a href='' className='m-1'>Create Airdrop</a>
                <a href='' className='m-1'>Careers</a>


            </div>
            <div className='flex flex-1 flex-col text-center text-xl w-1/3 justify-center '>
                <a href='' className='m-1'>watchlist</a>
                <a href='' className='m-1'>Protfolio</a>
                <a href='' className='m-1'>Blog</a>
                <a href='' className='m-1'>Badges</a>
                <a href='' className='m-1'>Audit</a>
                <a href='' className='m-1'>Airdrop</a>
                <a href='' className='m-1'>About Us</a>

            </div>
            {/* social media */}
            <div className=' grid grid-cols-3 w-1/3 text-5xl text-center justify-center '>
                <a href='https://www.facebook.com/groups/cryptolaunchpadofficial' className='items-center justify-center'><FaFacebookSquare className='items-center justify-center'/> </a>
                <a href='https://twitter.com/CryptoLaunchPD' ><FaTwitterSquare/> </a>
                <a href='https://www.reddit.com/r/CryptoLaunchPadTokens' ><FaRedditSquare/> </a>
            </div>
            </div>
            <div className='justify-between text-center border-t-2 flex flex-row flex-1 border-separate  '>

                <h2 className=' mt-2 '> © All Right Reserved</h2>
                <h2 className=' mt-2 '>Crypto <span className='text-yellow-500 text-bold'>LaunchPad 2022</span></h2>
            </div>
            </div>        
    );
};

export default Footer;
