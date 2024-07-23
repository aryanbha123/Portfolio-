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
   <div className="container mx-auto my-0">
  <div className="bg-white shadow-lg rounded-lg px-2 py-6 mb-8">
    <h2 className="text-2xl font-bold mb-2">Demystifying Menstruation <br /><span className="text-gray-600">Yoni Bleed With Pride</span></h2>
    <p className="text-lg text-gray-700 mb-4">Join us for an informative webinar on menstruation and menstrual health organized by Yoni Bleed with Pride, promoting menstrual equity.</p>
    <hr className="my-4" />
    <p className="text-lg text-gray-800 mb-4">This webinar aims to educate and raise awareness about menstruation, menstrual hygiene, and related health issues.</p>
    <div className="flex">
      <a href="tel:7017244279" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Call to Register</a>
      <a href="https://api.whatsapp.com/send?phone=91 7017244279&text=Hi,%20I%20want%20to%20register%20for%20the%20Menstruation%20Education%20Webinar." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register via WhatsApp</a>
    </div>
    <p className="text-lg text-gray-800 mt-4">Registration is free. All participants will receive an e-certificate.</p>
  </div>

  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">About the Webinar</h2>
    <p className="text-lg text-gray-800">This webinar will cover topics such as:</p>
    <ul className="list-disc list-inside text-lg text-gray-700">
      <li>Understanding menstrual cycles</li>
      <li>Importance of menstrual hygiene</li>
      <li>Common menstrual disorders</li>
      <li>Myths and facts about menstruation</li>
    </ul>
  </div>

  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">Meet the Speakers</h2>
    <p className="text-lg text-gray-800">Event is organized by our Interns</p>
    <ul className="list-disc list-inside text-lg text-gray-700">
      <li>Mayank Nautiyal</li>
      <li>Raghav Dabral</li>
    </ul>
  </div>

  {/* WhatsApp Registration Section */}
  <div id="whatsapp-registration" className="mb-8">
    <h2 className="text-2xl font-bold mb-y">Register via WhatsApp</h2>
    <p className="text-lg mb-2 text-gray-800">You can also register for the webinar via WhatsApp. Click the button below to start the registration process:</p>
    <a href="https://api.whatsapp.com/send?phone=91 7017244279&text=Hi,%20I%20want%20to%20register%20for%20the%20Menstruation%20Education%20Webinar." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register via WhatsApp</a>
  </div>

  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">About Yoni Bleed with Pride</h2>
    <p className="text-lg text-gray-800">Yoni Bleed with Pride is an NGO dedicated to promoting menstrual equity and raising awareness about menstrual health.</p>
    <p className="text-lg text-gray-800">Learn more about our initiatives and how you can support us <a href="#">here</a>.</p>
  </div>
</div>

    </>
  );
}
