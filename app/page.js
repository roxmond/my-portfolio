'use client'
import Image from 'next/image'
import { BgVideo } from '@/components/bgvideo'
import { Nav } from '@/components/nav'
import logo from '@/imgs/logo-w.png'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <BgVideo />
        

            <div className="logo">
                <Image src={logo} width={900} height={156} className="logo" id="myLogo" alt='logo'/>
            </div>
      </div>
        

    <div className="footer-basic">
        <p>FOOTER</p>
    </div>
    </>
  )
}
