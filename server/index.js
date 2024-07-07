const express = require('express')
const cookie = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const URI = "mongodb+srv://aryanbhandari4077:qHiT2RmS7y343QC7@cluster0.wqexvgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8000
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:["https://aryanbhandarionline.in" , "http://localhost:3000"],
    allowedHeaders:true,
    credentials:true
}));

app.use('/api' , require('./routes/review'));
app.use('/api' , require('./routes/project'));

app.get('/' , (req,res) =>{
    res.send("Web Server Functioning Properly")
})
app.listen(PORT,() => { console.log("Running ")})

mongoose.connect(URI).then(() => {console.log("Connected")}).catch((err) => console.log(err));