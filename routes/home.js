const jwt = require('jsonwebtoken');

module.exports = (app)=>{
    app.get('/api/home',(req,res)=>{
        console.log(req.headers.authorization);
        if(!req.headers.authorization){
            returnres.send({
                success:false,
                error:'Authentication Failed'
            })
        }
        var token = req.headers.authorization
        //remove the Bearer from the token
        console.log(token);
        token = token.split('Bearer ').pop()
        //token.replace('Bearer ','');
        console.log("TOKEN IS " + token);
        jwt.verify(token,require('../config').secret,(err,id)=>{
            if(err)
            {
                console.log(err);
                return res.send({
                    success:false,
                    error:"Authentication Failed"
                })
            }
            console.log(id);
            return res.send({
                success:true
            })
        })
    })
}