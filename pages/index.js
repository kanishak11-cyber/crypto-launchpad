import Head from 'next/head'
import Connect from '../Components/Connect'
import Welcome from '../Components/Welcome'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Crypto LaunchPad</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Connect/>
        
      </div>

      
    </div>
  )
}
