const express = require('express')
const cookie = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const URI = "mongodb+srv://aryanbhandari4077:qHiT2RmS7y343QC7@cluster0.wqexvgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8000
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin: "*",
    allowedHeaders: true,
    credentials: true
}));

app.use('/api', require('./routes/review'));
app.use('/api', require('./routes/project'));
app.get('/', (req, res) => {
    // const options = {
    //     root: path.join(__dirname)
    // };

    // const fileName = 'index.html';
    // res.sendFile(fileName, options, function (err) {
    //     if (err) {
    //         console.error('Error sending file:', err);
    //     } else {
    //         console.log('Sent:', fileName);
    //     }
    // });
    res.redirect("https:aryanbhandari.online")
})
app.listen(PORT, () => { console.log("Running ") })

mongoose.connect(URI).then(() => { console.log("Connected") }).catch((err) => console.log(err));