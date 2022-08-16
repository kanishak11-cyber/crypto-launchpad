import React from 'react'
import Link from 'next/link'

const style = {
  wrapper: `px-10 py-5`,
  titleContainer: `flex cursor-pointer items-center`,
  title: `text-xl font-semibold text-gray-500 mr-2`,
  container:`text-center items-center uppercase`,
  comingSoon:`md:text-9xl text-3xl py-28 flex flex-col`,
  spanColor:`text-yellow-500`,
}
const Promote = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <Link href='/' ><h1 className={style.title}>Home </h1></Link> <span> / Promote</span>
      </div>
      <div className={style.container}>
        <h1 className={style.comingSoon}>Promote <span className={style.spanColor}>Coming Soon</span></h1>
      </div>
    </div>
  )
}

export default Promote