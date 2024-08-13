import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import git from '../Assests/github.png';
import instagram from '../Assests/insta.png';
import linkedin from '../Assests/linkedin.png';
import whatsapp from '../Assests/whatsapp.png';
import facebook from '../Assests/fb.png';
import logo from '../Assests/logo.jpg'
import google from '../icons/google.svg'
import { Menu, Close, GitHub, Link as EmailLink, Logout, PowerOff, Power, LogoutRounded, Google, LogoutOutlined, ArrowDropDown, LinkedIn, ArrowDropUp, ArrowUpward, CloseRounded } from '@mui/icons-material'
import { Divider, IconButton, Typography, Avatar, Button, Icon } from '@mui/material';
import fsd from '../Assests/FSD.png';
import { signInWithGoogle, logout as signOut } from '../firebase';
import { useAuth } from '../AuthContext';
import './Navbar.css'


export default function Navbar() {


  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-black' : '';

  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuth();
  const handelScroll = () => {
    if (window.scrollY > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handelScroll);
    return () => {

      window.removeEventListener('scroll', handelScroll)
    }

  })
  return (
    <>
      <div style={{ marginBottom: "95px" }}>
        <nav style={{ marginBottom: "95px" }} className=" flex top-0 bg-white z-50 fixed w-full items-center gap-7 px-4 py-4">
          <div className="flex gap-5 items-center">
            <img height={"60px"} width={"60px"} style={{ borderRadius: "50%" }} src={logo} alt="" />
            <IconButton>
              {!showNav ?
                <Menu onClick={() => setShowNav(true)} ></Menu>
                :
                <CloseRounded onClick={() => setShowNav(false)}></CloseRounded>}
            </IconButton>
          </div>
          <ul className='list-none lg:flex hidden gap-4 font-sans font-medium '>
            <Link to={'/'} >Home</Link>
            <Link>About</Link>
            <Link to={'internship/yoni-bleed-with-pride'} >Yoni</Link>
            <Link>Expirence</Link>
            <Link>Contact</Link>
            <Link className='relative'>
              Projects

              {
                !showDropdown ?
                  <>
                    <ArrowDropDown onClick={() => setShowDropdown(true)} />
                  </>
                  :
                  <>
                    <ArrowDropUp onClick={() => setShowDropdown(false)} />
                    <div style={{ zIndex: "994" }} className="z-50 flex flex-col text-nowrap absolute gap-1 px-2 shadow bg-white rounded py-3 top-16">
                      <p className='hover:bg-pink-50 font-normal cursor-pointer px-4'>TGCI Institute</p>
                      <Divider className='px-4'/>
                      <p className='hover:bg-pink-50 font-normal cursor-pointer px-4'>Pukaar NGO</p>
                      <Divider className='px-4'/>
                      <p className='hover:bg-pink-50 font-normal cursor-pointer px-4'>Urban Nest</p>
                      
                    </div>
                  </>
              }

            </Link>

          </ul>
          <div className="flex justify-end items-center gap-7 flex-1">
            <div className="flex gap">
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton className='mx-5'>
                <LinkedIn />
              </IconButton>
            </div>
            {
              user ?
                <div className='flex gap-1 items-center justify-center'>

                  <img style={{ borderRadius: "50%" }} height={"34px"} width={"34px"} src={user.photoURL} alt="Profile" />
                  {/* <button onClick={signInWithGoogle}>Logi</button>
                {
                  user.displayName
                } */}

                  <IconButton onClick={signOut}>
                    <LogoutRounded />
                  </IconButton>
                </div>
                :
                <div>
                  <IconButton onClick={signInWithGoogle}>
                    <img height={"23px"} width={"23px"} src={google} alt="" />
                  </IconButton>
                </div>
            }
          </div>
        </nav>


        <nav style={{ width: "230px", top: "92px" }} className={`${showNav ? 'smallNav' : '' } hidesmallNav items-between shadow-sky-200  py-5 px-5 z-40 h-[calc(100vh-92px)] fixed left-0 flex flex-col bg-white`}>
          <ul className='flex flex-col lg:hidden'>
            <Link to={'/'}>Home</Link>
            <Link>About</Link>
            <Link to={'internship/yoni-bleed-with-pride'}>Yoni NGO</Link>
            <Link>Expirence</Link>
            <Link>Projects</Link>
          </ul>
          <ul className='lg:flex hidden flex-col'>
            <p className='font-medium text-l '>DOCS</p>
            <Link>Node Js Installation</Link>
            <Link>React Js Install & Deployment</Link>
            <Link>Vps vs C Panel</Link>
            <Link>Express JS</Link>
            <Link>xampp setup</Link>
            <Link>Sitemap</Link>
          </ul>
          <p className='lg:mt-32 bottom-3 fixed'>*Copyright {new Date().getFullYear() + " "} Aryan</p>
        </nav>

        <div onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }} className={`text-white p-2 z-50 fixed right-5 bottom-8 bg-black transition-all duration-200 ease-linear ${!show ? 'hidden' : 'block'}`} style={{ borderRadius: "50%", cursor: "pointer" }}>
          <ArrowUpward />
        </div>
      </div>
      <Divider className='shadow-lg z-40' sx={{ position: "fixed", top: "93px", width: "100vw" }} />
    </>
  )
}