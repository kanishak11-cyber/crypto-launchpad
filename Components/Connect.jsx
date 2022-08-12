import Image from 'next/image';
import React from 'react';
import bitcoin from '../Assets/bitcoin.png';
import swipe from '../Assets/swipe.png';
import crypto from '../Assets/cryptocurrency-wallet.png';
import eth from '../Assets/ethereum.png'
import doge from '../Assets/dogecoin.png'
import xpr from '../Assets/xrp.png'

const Connect = () => {
    return (
        <div className='flex flex-row flex-1 p-2 text-white justify-center '>
            <div className='text-white justify-items-center p-10 text-lg font-extralight'>
                <h2 className=' p-5'>Be the first to know about the next potential coins</h2>
                <h6 className='p-5 '>Get the outperforming coins in our platform, crypto news and updates right to your inbox!</h6>
                <div className='flex flex-row flex-1 p-5 justify-center'>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-1/2 blue-glassmorphism border-2  text-[#eee] p-3 font-medium " />
                    <button className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Subscribe</button>

                </div>
            </div>
            <div className='flex flex-col  justify-center p-5'>
            <div className='grid grid-cols-3 p-3 mt-2'>
                <span className='w-30 h-30'>
                <Image 
                    src={bitcoin} alt=''
                    width={100}
                    height={100}
                />
                </span>
                <span className='w-30 h-30'>
                <Image 
                    src={crypto} alt=''
                    width={100}
                    height={100}
                />
                </span>
                <span className='w-30 h-30'>
                <Image 
                    src={eth} alt=''
                    width={100}
                    height={100}
                />
                </span>
            </div>
            <div className='grid grid-cols-3 p-3 justify-center mt-5'>
                <span className='w-30 h-30'>
                <Image 
                    src={swipe} alt=''
                    width={100}
                    height={100}
                />
                </span>
                <span className='w-30 h-30 '>
                <Image 
                    src={doge} alt=''
                    width={100}
                    height={100}
                />
                </span>
                <span className='w-30 h-30'>
                <Image 
                    src={xpr} alt=''
                    width={100}
                    height={100}
                />
                </span>
            </div>
            </div>
        </div>
    );
};

export default Connect;
