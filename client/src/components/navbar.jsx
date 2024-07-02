import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import git from '../Assests/github.png';
import instagram from '../Assests/insta.png';
import linkedin from '../Assests/linkedin.png';
import whatsapp from '../Assests/whatsapp.png';
import facebook from '../Assests/fb.png';
import { Menu, Close, GitHub } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material';
import './Navbar.css'
export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-black' : '';

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="hidden w-full fixed lg:flex justify- py-5 items-center " style={{zIndex:"99"}}>
        <div className="flex justify-between w-full px-32 items-center py-4">
          <div className="nav-items flex gap-7">
            <Link c to="/" className={ ` links font-medium ${isActive('/')}`}>Home</Link>
            <Link c to="/about" className={ ` links font-medium ${isActive('/about')}`}>About</Link>
            <Link c to="/experience" className={ ` links font-medium ${isActive('/experience')}`}>Experience</Link>
            <Link c to="/projects" className={ ` links font-medium ${isActive('/projects')}`}>Projects</Link>
          </div>
          <div className="logo flex gap-6">
            <Link to="/facebook"><img src={facebook} height={"23px"} width={"23px"} alt="Facebook" /></Link>
            <Link to="/instagram"><img src={instagram} height={"23px"} width={"23px"} alt="Instagram" /></Link>
            <Link to="/linkedin"><img src={linkedin} height={"23px"} width={"23px"} alt="LinkedIn" /></Link>
            <Link to="/github"><img src={git} height={"23px"} width={"23px"} alt="GitHub" /></Link>
            <Link to="/whatsapp"><img src={whatsapp} height={"23px"} width={"23px"} alt="WhatsApp" /></Link>
          </div>
        </div>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]" style={{zIndex:"102"}}>
        <div className="flex items-center justify-center mt-2">
          <Link to="/" className="w-16 h-16 bg-dark text-white flex items-center border border-solid border-transparent dark:border-light justify-center rounded-full text-2xl font-bold" style={{ backgroundColor: "rgb(18, 18, 18)" }}>
            AB
          </Link>
        </div>
      </div>
      <nav  className='lg:hidden fixed w-full  flex items-center py-5 justify-between px-3 '>
        <div className="btn">
          {
            !showNav ?
              <>
                <IconButton onClick={() => setShowNav(true)}>
                  <Menu />
                </IconButton>
              </>
              :
              <>
                <IconButton onClick={() => setShowNav(false)}>
                  <Close sx={{
                    color:"#fff"
                  }} />
                </IconButton>
              </>
          }
        </div>
        <div className={`lg:hidden smBar  flex justify-center w-full fixed left-0 ${showNav ? 'visible' : ''}`} style={{
          height:"100vh" , top:0 , alignItems:'center'  , zIndex:"-1" 
        }}>
          <div className="flex gap-10 top-32 flex-col items-center justify-center fixed py-32 rounded shadow-sm w-72" style={{ zIndex:"999" ,
              minWidth:"70vw" ,background: "rgba(0,0,0,.6)" }}>
            <div className="nav-items flex flex-col gap-2">
              <Link onClick={()=> setShowNav(false)}  to={"/"}> <span className='font-medium' style={{color:"#f1f1f1"}}>Home</span> </Link>
              <Link onClick={()=> setShowNav(false)} to={'/about'}> <span className='font-medium' style={{color:"#f1f1f1"}}>About</span> </Link>
              <Link onClick={()=> setShowNav(false)} to={'/experience'}> <span className='font-medium' style={{color:"#f1f1f1"}}>Expirience</span> </Link>
              <Link onClick={()=> setShowNav(false)} to={'/project'}> <span className='font-medium' style={{color:"#f1f1f1"}}>Projects</span> </Link>
            </div>
            <div className="icons flex gap-5">
              <Link  to="/facebook"><img src={facebook} height={"23px"} width={"23px"} alt="Facebook" /></Link>
              <Link  to="/instagram"><img src={instagram} height={"23px"} width={"23px"} alt="Instagram" /></Link>
              <Link  to="/linkedin"><img src={linkedin} height={"23px"} width={"23px"} alt="LinkedIn" /></Link>
              <Link  to="/github"><GitHub sx={{color:'#fff'}}/></Link>
              <Link  to="/whatsapp"><img src={whatsapp} height={"23px"} width={"23px"} alt="WhatsApp" /></Link>
            </div>
          </div>
        </div>
      </nav>
      <Divider/>
    </>
  );
}
