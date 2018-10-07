import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props);

        //set initial state 
        this.state ={usernameRegister:'',
                    passwordRegister:''}
    }

    // check input and update to state
    handleChange = (event)=>{
        var key = event.target.id;
        var value = event.target.value
        this.setState({[key]:value});
    }

    handleRegister = (e)=>{
        e.preventDefault();
        console.log("inside handle register");

        
        //send to API to verify
        fetch('/api/register',{
            method:'POST',
            body:JSON.stringify({
                username:this.state.usernameRegister,
                password:this.state.passwordRegister
            }),
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((res)=>{
            return res.json()
        })
        .catch((err)=>{
            console.log(err);
        })
        .then((json)=>{
            console.log(json)
            //========================== THE REGISTRATION IS SUCCESSFUL==============================
            if(json.success===true && json.auth===true){
                this.props.changeLoginStatus(true);
                alert("Registration Successful");
            }
            alert('register sent');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div className="col-sm-6">
                    <h2>Register Page</h2>
                    <form onSubmit={this.handleRegister}>
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                            className="form-control" 
                            id="usernameRegister"
                            value={this.state.username}
                            onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                            className="form-control" 
                            id="passwordRegister"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
        )
    }

}

export default Register;