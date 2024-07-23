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
  React.useEffect(() => {
    function scrolll() {
      window.scrollTo({ top: 0 });
    }
    scrolll();
  }, [])
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
      {/* 
      <Query />
      <List/>
      <p className='border-pink-500 border-l-4 px-4 mx-6 font-medium lg:text-4xl text-3xl' >Skills</p>
      <Carousel />
      <Service/> */}
      <div class="container" style={{margin:" 0 auto;"}}>
        <div class="jumbotron">
          <h2 class="display-4">Demystifying Menstruation <br /> <span >- Yoni Bleed With Pride</span></h2>
          <p class="lead">Join us for an informative webinar on menstruation and menstrual health organized by Yoni Bleed with Pride, promoting menstrual equity.</p>
          <hr class="my-4" />
            <p>This webinar aims to educate and raise awareness about menstruation, menstrual hygiene, and related health issues.</p>
            <a class="btn btn-primary btn-lg" href="tel:7017244279" role="button">Call to Register</a>
            <p class="mt-3">Registration is free. All participants will receive an e-certificate.</p>
        </div>

        <div>
          <h2>About the Webinar</h2>
          <p>This webinar will cover topics such as:</p>
          <ul>
            <li>Understanding menstrual cycles</li>
            <li>Importance of menstrual hygiene</li>
            <li>Common menstrual disorders</li>
            <li>Myths and facts about menstruation</li>
          </ul>
        </div>

        <div>
          <h2>Meet the Speakers</h2>
          <p>Event is organised by our Interns</p>
          <ul>
            <li>Mayank Nautiyal</li>
            <li>Raghav Dabral</li>
          </ul>
        </div>

        {/* <!-- WhatsApp Registration Section --> */}
        <div id="whatsapp-registration">
          <h2>Register via WhatsApp</h2>
          <p>You can also register for the webinar via WhatsApp. Click the button below to start the registration process:</p>
          <a class="btn btn-success" href="https://api.whatsapp.com/send?phone=70172444279&text=Hi,%20I%20want%20to%20register%20for%20the%20Menstruation%20Education%20Webinar." target="_blank" role="button">Register via WhatsApp</a>
        </div>

        <div>
          <h2>About Yoni Bleed with Pride</h2>
          <p>Yoni Bleed with Pride is an NGO dedicated to promoting menstrual equity and raising awareness about menstrual health.</p>
          <p>Learn more about our initiatives and how you can support us <a href="#">here</a>.</p>
        </div>

      </div>
    </>
  );
}
