import { Call, Chat, ChatBubble, Mail } from '@mui/icons-material';
import { Divider, IconButton, Tooltip } from '@mui/material';
import React from 'react'
// import logo from '../Assests/logo/jpg'
function Footer() {
  return (
    <footer>
      <div className='fixed w-full bottom-0 flex justify-between'>
        <Divider></Divider>
        <div className="w-full px-10 lg:px-32 py-4">
          {new Date().getFullYear() + " "}
          © All Rights Reserved
        </div>
        <div className='hidden icons lg:flex gap-2 items-center px-32'>
          <IconButton onClick={() => window.location.href = 'tel:7017244279'} sx={{
              background: "#000",
              color: "#f1f1f1"}}>
            <ChatBubble />
          </IconButton>
          <Tooltip title="Make a Call ">

            <IconButton onClick={() => window.location.href = 'tel:7017244279'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }}>
              <Call color='inherit' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mail ">

            <IconButton onClick={() => window.location.href = 'mailto:aryanbhandari4077@gmail.com'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }} >
              <Mail />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

//https://web.whatsapp.com/send/?phone=7017244279&text&type=phone_number&app_absent=0