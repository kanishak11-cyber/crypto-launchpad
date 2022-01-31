import Head from 'next/head'
import NavBar from '../Components/NavBar'
import Welcome from '../Components/Welcome'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Crypto LaunchPad</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='gradient-bg-welcome'>
        <NavBar/>
        <Welcome/>
        
      </div>

      
    </div>
  )
}
