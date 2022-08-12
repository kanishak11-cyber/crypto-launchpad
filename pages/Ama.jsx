import React from 'react'
import Link from 'next/link'

const style={
  wrapper: `px-20`
}
const Ama = () => {
  return (
    <div className={style.wrapper}>
      <Link href='/' > Home</Link> / AMA

    </div>
  )
}

export default Ama