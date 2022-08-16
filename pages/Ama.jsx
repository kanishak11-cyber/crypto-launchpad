import React from 'react'
import Link from 'next/link'
import { FiSend } from 'react-icons/fi'
import { BsMic, BsCalendar3 } from 'react-icons/bs'
import { MdAvTimer } from 'react-icons/md'
import { GiTrophy } from 'react-icons/gi'
import Image from 'next/image'
import Logo from '../Assets/logo.png'
const style = {
  wrapper: `px-10 py-5 text-white`,
  titleContainer: `flex cursor-pointer items-center`,
  title: `text-xl font-semibold text-gray-500 mr-2`,
  sectionDiv: `flex flex-row items-center justify-between pt-5`,
  requestButton: `bg-blue-500 hover:bg-blue-700 text-white font-bold md:p-5 p-2 md:text-xl text-[12px] rounded-full flex flex-row items-center justify-center`,
  rightSection: `flex flex-col items-center flex-start`,
  leftSection: `flex flex-row items-center flex-end`,
  subtitle: `md:text-md text-sm text-gray-500`,
  logoTitle: `md:text-4xl text-xl  font-semibold text-white m-2`,
  amaContainer: `text-100px flex flex-row text-center py-10 justify-center items-center`,
  amaLogo: `text-[140px] text-center justify-center opacity-10 -z-50`,
  venue: `text-xl text-center justify-center z-50 -mt-32`,
  venueTitle: ` text-3xl font-semibold text-white m-2`,
  venueItem: `flex flex-row items-center justify-center mx-2`,
}
const Ama = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <Link href='/' >
          <h1 className={style.title}>
            Home 
          </h1>
        </Link> 
        <span> / AMA</span>
      </div>
      <div className={style.sectionDiv}>
        <section className={style.rightSection} >
          <h1 className={style.logoTitle}>Crypto <span className='text-yellow-500'>LaunchPad</span></h1>
          <h2 className={style.subtitle}>Ask Me Anything Series</h2>
        </section>
        <section>
          <button className={style.requestButton}>
            <div className='text-white mx-2'>
              <FiSend />
            </div> 
            Request AMA
          </button>
        </section>
      </div>
      <div className={style.amaContainer}>
        <div>
          <Image src={Logo} height={200} width={200} alt='host' />
          <h1>name</h1>
        </div>
        <div>
          <div className={style.amaLogo}>
            <BsMic />
          </div>

          <div className={style.venue}>
            <h1 className={style.venueTitle}>AMA</h1>
            <h1 className={style.venueItem}><BsCalendar3 /> <span className='mx-2'>Date</span></h1>
            <h1 className={style.venueItem}><MdAvTimer /> <span className='mx-2'>Time</span></h1>
            <h1 className={style.venueItem}><GiTrophy /><span className='mx-2'>prize</span></h1>

          </div>

        </div>
        <div>
          <Image src={Logo} height={200} width={200} alt='host' />
          <h1>NAme</h1>
        </div>



      </div>
    </div>
  )
}

export default Ama