import React from 'react';

class Login extends React.Component{

    constructor(props){
        super(props);

        //set initial state 
        this.state ={username:'',
                    password:''}
    }

    // check input and update to state
    handleChange = (event)=>{
        var key = event.target.id;
        var value = event.target.value
        this.setState({[key]:value});
    }

    handleLogin = (e)=>{
        e.preventDefault();
        

        fetch('/api/a')
        .then((res)=>{console.log(res);res.json()})
        .catch((err)=>console.log(err))
        .then((res)=>console.log(res))
        //send to API to verify
        fetch('/api/login',{
            method:'POST',
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
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
            alert('login sent');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div className="col-sm-6 login-div">
                    
                    <form className="form-login" onSubmit={this.handleLogin}>
                    <table>
                        <tr>
                            <td>Username</td>
                            <td>Password</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" 
                                className="form-control-xs" 
                                id="username"
                                value={this.state.username}
                                onChange={this.handleChange}/>
                            </td>
                            <td>
                            <input type="password" 
                            className="form-control-xs" 
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                            </td>
                            <td>
                            <button type="submit" className="btn btn-primary btn-sm login-button">Submit</button>
                            </td>
                        </tr>
                    </table>
                    </form>
                   
                    </div>
        )
    }

}

export default Login;