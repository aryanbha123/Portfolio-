const express = require('express')
const cookie = require('cookie-parser');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"*",
    credentials:true
}));


app.get('/' , (req,res) =>{
    res.send("Web Server Functioning Properly")
})
app.listen(4000,() => {

})