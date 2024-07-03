import { Call, ChatBubble, Mail, WhatsApp } from '@mui/icons-material';
import { Divider, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';

function Footer() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from the chatbot
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a chatbot response.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <footer>
      <div className='fixed w-full bottom-0 flex justify-between'>
        <Divider></Divider>
        <div className="w-full px-10 lg:px-32 py-4">
          {new Date().getFullYear() + " "}
          © All Rights Reserved
        </div>
        <div className='hidden icons lg:flex gap-2 items-center px-32'>
          <Tooltip title="Chat">
            <IconButton onClick={handleClickOpen} sx={{
              background: "#000",
              color: "#f1f1f1"
            }}>
              <ChatBubble />
            </IconButton>
          </Tooltip>
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
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm"  minWidth="sm"  fullWidth>
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
          <Button onClick={handleSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </footer>
  );
}

export default Footer;
