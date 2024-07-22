import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, ListItem, ListItemText } from '@mui/material';
import { Send } from '@mui/icons-material';
import Carousel, { InfiniteSkillsScroller } from '../components/Caursel';
import Query from '../components/query';
import List from '../components/list';
import Service from '../components/service';

export default function Home() {
  
  return (
    <>
      {/*
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Chat with us</DialogTitle>
        <DialogContent>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={message.text}
                  secondary={message.sender === 'user' ? 'You' : 'Bot'}
                  className={message.sender === 'user' ? 'text-right' : 'text-left'}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            fullWidth
            variant="outlined"
          />
          <Button onClick={handleSend} color="secondary" endIcon={<Send/>}>
            Send
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* <div className="flex justify-center lg:h-96">
      </div> */}

      <Query />
      <List/>
      <p className='border-pink-500 border-l-4 px-4 mx-6 font-medium lg:text-4xl text-3xl' >Skills</p>
      <Carousel />
      <Service/>
    </>
  );
}
