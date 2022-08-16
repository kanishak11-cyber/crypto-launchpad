import Head from 'next/head'
import Connect from '../Components/Connect'
import Today from '../Components/Today'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Crypto LaunchPad</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
      <Today />
        <Connect/>
       
      </div>

      
    </div>
  )
}
