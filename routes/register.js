var router = require('express').Router();
var jwt = require('jsonwebtoken');
var User = require('../db/User');

module.exports = (app)=>{
    

    app.post('/api/register',(req,res)=>{
        console.log("Reached in register");
        console.log(req.body);
        var username = req.body.username;
        var password = req.body.password;
    
        // if values are empty, return error
        if(!username){
            return res.send({
                success:false,
                error:'username required'
            })
        }
        if(!password){
            return res.send({
                success:false,
                error:'password required'
            })
        }

        
    
        // check if the username already exists, if does then send the error
        User.find({username},function(err,docs){
            console.log("aa gya")
            if(err){
                return res.send({
                    success:false,
                    error:"Server error"
                })
            }
            if(docs.length>0){
                return res.send({
                    success:false,
                    error:"User already exists"
                })
            }
    
            var user = new User();
        
            //encrypt the password
            password = user.encryptPassword(password);
            console.log("encrypted password" + password);
            user.username = username;
            user.password = password;
    
            //save the user if it doesnt exist
            user.save(function(err,doc){
                if(err){
                    console.log("DB ERROR");
                    console.log(err);
                    return res.end({
                        success:false,
                        error:"Database Error"
                    });
                }
                
                // send the token
                var token = jwt.sign({user_id:doc._id}, require('../config').secret,{expiresIn:60*60});
                res.send({
                    success:true,
                    auth:true,
                    token
                })
                
            })
            
            
        })
    
        
    
        
    })

}







