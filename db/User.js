var mongoose =  require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:String,
    password:String
});


UserSchema.methods.encryptPassword = function(password){
    //return bcrypt.hashSync(password,bcrypt.genSaltSync(8))
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password)
};

var User = mongoose.model('User',UserSchema);

module.exports = User;