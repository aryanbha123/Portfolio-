import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import git from '../Assests/github.png';
import instagram from '../Assests/insta.png';
import linkedin from '../Assests/linkedin.png';
import whatsapp from '../Assests/whatsapp.png';
import facebook from '../Assests/fb.png';
import { Menu, Close, GitHub, Link as EmailLink, Logout, PowerOff, Power, LogoutRounded, Google, LogoutOutlined } from '@mui/icons-material'
import { Divider, IconButton, Typography, Avatar, Button, Icon } from '@mui/material';
import fsd from '../Assests/FSD.png';
import { signInWithGoogle, logout as signOut } from '../firebase';
import { useAuth } from '../AuthContext';


import './Navbar.css'
export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-black' : '';

  const [showNav, setShowNav] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <nav className="hidden w-full fixed lg:flex justify- py-5 items-center " style={{ zIndex: "99" }}>
        <div className="flex justify-between w-full px-32 items-center py-4">
          <div className="nav-items flex gap-7">
            <Link c to="/" className={` links font-medium ${isActive('/')}`}>Home</Link>
            <Link c to="/about" className={` links font-medium ${isActive('/about')}`}>About</Link>
            <Link c to="/experience" className={` links font-medium ${isActive('/experience')}`}>Experience</Link>
            <Link c to="/project" className={` links font-medium ${isActive('/projects')}`}>Projects</Link>
          </div>
          <div className="logo flex gap-6">
            {user ? (
              <div className='flex gap-2'>
                <Avatar alt={user.displayName} src={user.photoURL} />
                {/* <Typography variant="h6" component="p">
                  {user.displayName}
                </Typography> */}
                <IconButton onClick={signOut} >
                  <LogoutRounded />
                </IconButton>
              </div>
            ) :
              <>
                <>
                  <IconButton onClick={signInWithGoogle}>
                    <svg className='text-lg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                  </IconButton>
                </>
              </>

            }
          </div>
        </div>
      </nav>
      <div className="fixed left-[50%] top-1 translate-x-[-50%]" style={{ zIndex: "997" }}>
        <div className="flex items-center justify-center mt-2">
          <Link to="/" className="w-16 h-16 bg-dark text-white flex items-center border border-solid border-transparent dark:border-light justify-center rounded-full text-2xl font-bold" style={{ backgroundColor: "rgb(18, 18, 18)" }}>
            AB
          </Link>
        </div>
      </div>
      <nav style={{zIndex:"999npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/material @emotion/styled @emotion/react "}} className='lg:hidden fixed w-full  flex items-center py-5 justify-between px-3 '>
        <div className="btn">
          {
            !showNav ?
              <div className='flex'>

                <IconButton onClick={() => setShowNav(true)}>
                  <Menu />
                </IconButton>
              </div>
              :
              <>
                <IconButton onClick={() => setShowNav(false)}>
                  <Close sx={{
                    color: "#fff"
                  }} />
                </IconButton>
              </>
          }
        </div>
        <div className="">
          {!user ?
            <>
              <IconButton  onClick={signInWithGoogle}>
                <svg className='text-lg h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
              </IconButton>
            </> : <div className='flex gap-3'>
              <Avatar alt={user.displayName} src={user.photoURL} />
              <IconButton onClick={signOut}><LogoutOutlined /></IconButton>
            </div>}
        </div>
        <div className={`lg:hidden smBar  flex justify-center w-full fixed left-0 ${showNav ? 'visible' : ''}`} style={{
          height: "100vh", top: 0, alignItems: 'center', zIndex: "-1"
        }}>
          <div className="flex gap-10 top-32 flex-col items-center justify-center fixed py-32 rounded shadow-sm w-72" style={{
            zIndex: "999",
            minWidth: "70vw", background: "rgba(0,0,0,.6)"
          }}>
            <div className="nav-items flex flex-col gap-2">
              <Link onClick={() => setShowNav(false)} to={"/"}> <span className='font-medium' style={{ color: "#f1f1f1" }}>Home</span> </Link>
              <Link onClick={() => setShowNav(false)} to={'/about'}> <span className='font-medium' style={{ color: "#f1f1f1" }}>About</span> </Link>
              <Link onClick={() => setShowNav(false)} to={'/experience'}> <span className='font-medium' style={{ color: "#f1f1f1" }}>Expirience</span> </Link>
              <Link onClick={() => setShowNav(false)} to={'/project'}> <span className='font-medium' style={{ color: "#f1f1f1" }}>Projects</span> </Link>

            </div>
            <div className="flex gap-5">


            </div>
          </div>
        </div>
      </nav>

      <Divider />
    </>
  );
}
