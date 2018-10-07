module.exports = (app) => {
    console.log("reached in routes");
    require('./login.js')(app);
    require('./register.js')(app);
    require('./home.js')(app);
}   