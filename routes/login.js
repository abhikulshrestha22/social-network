
var jwt = require('jsonwebtoken');
var User = require('../db/User');
var mongoose = require('mongoose');

module.exports = (app)=>{

app.get('/api/a',(req,res)=>{
    res.send({
        success:true
    });
})

app.post('/api/login',(req,res)=>{
    console.log("got request")
    var {username, password} = req.body;

    if(!username){
        return res.send({
            success:false,
            message:'Error : username is required',

        });
    }

    if(!password){
        return res.send({
            success:false,
            message:'Error : Password cannot be blank'                
        });
        }

    // check if connection is connected or not, if not , return the error
    if(mongoose.connection.readyState!=1){
        return res.status(500).send({
            success:false,
            message:'Error : Server Error'                
        });
    }

    console.log(username,password);
        // find the user in the db
    User.find({username},(err,users)=>{
            console.log("finding the user");
            if(err){
                return res.send({
                    success:false,
                    message:"Error: Server Error"
                });
            }
            console.log("total users");
            console.log(users);
            if(users.length!=1){
                return res.send({
                    success:false,
                    message:"Error: Invalid"
                });
            }
            const user = users[0];
            if(!user.validPassword(password)){
                return res.send({
                    success:false,
                    message:"Error: Invalid"
                });
            }

            // if password is correct, provide the user with the jwt token
            var token = jwt.sign({user_id:user._id}, require('../config').secret,{expiresIn:60*60});
                res.send({
                    auth:true,
                    token
                })


        })

})    


}