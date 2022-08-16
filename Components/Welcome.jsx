import Image from 'next/image';
import React from 'react';
import { FaTelegram, FaTelegramPlane, FaTrophy } from 'react-icons/fa';
import { BsFillMicFill, BsNewspaper, BsShieldLockFill, BsImages } from 'react-icons/bs';
import logo from '../Assets/logo.png';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { useRouter } from 'next/router'
import Today from './Today';
import Link from 'next/link';

const styles = {
    wrapper: `text-stone-200 flex flex-row h-16 ms:hidden text-center items-center px-10`,
    listContainer: `flex flex-row justify-between w-full  touch-auto md:overflow-x-hidden overflow-x-scroll scroll-smooth hover:scroll-auto`,
    listItem: `p-3 mx-2 flex Justify-center white-glassmorphism align-center`,
    listItemText:` text-[12px] font-semibold  w-full ml-1`,
    listItemIcon: `text-xl font-semibold`,
    listDiv: `flex w-full`
}
    
const Welcome = () => {

    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.listDiv}>
                <ul className={styles.listContainer}>
                    <li>
                        <button type="button" onClick={() => router.push('/')} className={styles.listItem}>
                            <h1 className={styles.listItemIcon}><FaTrophy /></h1>
                            <h2 className=' text-[12px] font-semibold md:w-full w-[16vw] ml-1 '> Today&apos;s best </h2>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/Audit')} className={styles.listItem}>
                            <h1 className=' text-xl font-semibold '><BsShieldLockFill /></h1>
                            <h2 className=' text-[12px]  font-semibold  '> Audit </h2>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/Promote')} className={styles.listItem}>
                            <h1 className=' text-xl font-semibold '><HiOutlineSpeakerphone /></h1>
                            <h2 className=' text-[12px]  font-semibold  '> Promote </h2>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/Ama')} className={styles.listItem}>
                            <h1 className=' text-xl font-semibold '><BsFillMicFill /></h1>
                            <h2 className=' text-[12px] font-semibold  ml-1'> AMA </h2>
                        </button>
                    </li>
                    <li>

                        <button type="button" onClick={() => router.push('/Airdrop')} className={styles.listItem}>
                            <h1 className=' text-xl font-semibold '><FaTelegramPlane /></h1>
                            <h2 className=' text-[12px] font-semibold ml-1 '> Airdrop </h2>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/Nft')} className={styles.listItem}>
                            <h1 className=' text-xl font-semibold '><BsImages /></h1>
                            <h2 className=' text-[12px]  font-semibold ml-1 '> NFT </h2>
                        </button>
                    </li>
                    <li>

                        <button type="button" onClick={() => router.push('/Blog')} className={styles.listItem}>
                            <h1 className={styles.listItemIcon}><BsNewspaper /></h1>
                            <h2 className={styles.listItemText}> Blog </h2>
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/Launchpad')} className={styles.listItem}>
                            <Image src={logo} width={25} height={25} alt='coin' />
                            <h2 className=' text-[12px]  font-semibold text-yellow-400 w-[28vw] md:w-full ml-1'> LaunchPad <span className='text-white'>Token</span> </h2>
                        </button>
                    </li>
                    <li>

                        <button type="button" onClick={() => router.push('/about')} className=' p-3  flex Justify-center white-glassmorphism  '>
                            <h1 className=' text-xl font-semibold '><FaTelegram className='text-blue-400' /></h1>
                            <h2 className=' text-[12px] font-semibold  w-[20vw] md:w-full ml-1'> Join Our Group </h2>
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Welcome;
