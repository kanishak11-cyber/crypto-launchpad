import React from 'react';
import Link from 'next/link'

const style={
  wrapper: `px-10 py-5`,
  titleContainer: `flex cursor-pointer items-center`,
  title: `text-xl font-semibold text-gray-500 mr-2`,
}

const Today = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <Link href='/' ><h1 className={style.title}>Home </h1></Link> <span> / Today</span>
      </div>
  </div>
  );
};

export default Today
