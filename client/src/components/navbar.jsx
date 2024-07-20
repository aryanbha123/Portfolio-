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
import { signInWithGoogle, signOut } from '../firebase';
import { useAuth } from '../AuthContext';


import './Navbar.css'
export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'border-b-2 border-black' : '';

  const [showNav, setShowNav] = useState(false);
  const { user } = useAuth();
  return (
    <>
      
    </>
  )
}