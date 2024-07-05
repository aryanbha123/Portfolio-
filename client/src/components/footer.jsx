import { Call, ChatBubble, Facebook, GitHub, Instagram, LinkedIn, Mail, Send, WhatsApp } from '@mui/icons-material';
import { Divider, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer>
      <div className=' bottom-0 flex flex-col lg:flex-row  w-full justify-between py-8'>
        <Divider></Divider>
        <div className="w-full justify-center lg:justify-start flex px-10 lg:px-32 py-4">
          {new Date().getFullYear() + " "}
          © All Rights Reserved
        </div>
        <div className='icons lg:gap-1 flex gap-4 items-center justify-center  lg:px-32'>
          <Tooltip title="Make a Call">
            <IconButton onClick={() => window.location.href = 'tel:7017244279'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }}>
              <Call color='inherit' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mail">
            <IconButton onClick={() => window.location.href = 'mailto:aryanbhandari4077@gmail.com'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }} >
              <Mail />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github">
            <IconButton onClick={() => window.location.href = 'https://github.com/aryanbha123/aryanbha123'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }} >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip title="Linked In">
            <IconButton onClick={() => window.location.href = 'https://www.linkedin.com/in/aryan-bhandari-555962286/'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }} >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton onClick={() => window.location.href = 'https://www.instagram.com/____aryanbhandari/'} sx={{
              background: "#000",
              color: "#f1f1f1"
            }} >
              <Instagram />
            </IconButton>
          </Tooltip>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
