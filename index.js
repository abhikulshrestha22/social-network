const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(require('./config').db).then(()=>{
    console.log("DB Connected");
})
.catch((err)=>console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(function(req,res,next){
    //check if the database is connected. If not return error
    // if(mongoose.connection.readyState!=1){
    //     console.log(mongoose.connection.readyState);
    //     console.error("db not connected");
    //         return res.status(500).send({
    //         success:false,
    //         message:'Error : Server Error'                
    //     });
    // }
    next();
})



require('./routes')(app);



if(process.env.NODE_ENV ==="production"){

//serve static file from the react app 
app.use(express.static(path.join(__dirname,'client/build')));
// The catchall handler : for any request that doesnt match one above
//send back React's index.html file.
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

}

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("listening on port " + port);
})