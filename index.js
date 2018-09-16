const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();


//serve static file from the react app 
app.use(express.static(path.join(__dirname,'client/build')));

//all api endpoints under /api
app.get('/api/passwords',(req,res)=>{
    const count = 5;

    //generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i=>generatePassword(12,false))

    //return as json
    res.json(passwords);
    console.log(`sent ${count} passwords`);

});

// The catchall handler : for any request that doesnt match one above
//send back React's index.html file.
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("listening on port " + port);
})