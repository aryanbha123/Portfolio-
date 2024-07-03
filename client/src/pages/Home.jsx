import React from 'react'
import './Home.css'
import fsd from '../Assests/FSD.png'
import {Link} from '@mui/icons-material'
export default function Home() {
  return (
    <>
      <div className='flex flex-wrap-reverse' style={{ marginTop: "98px" }}>
        <div>Home</div>
        <div></div>
      </div>
     <div className="logo-container flex justify-center items-center fixed">
        <div className="circle-logo ">
          <img src={fsd} className='logo-dev' style={{
          }} alt="" />
        </div>
        <span style={{
          position:"absolute" , cursor:"pointer"
        }}>Email <Link></Link></span>
     </div>

    </>
  )
}
