import React from 'react';
import Login from './Login';
import Register from './/Register';
class AuthenticationPage extends React.Component{

    constructor(props){
        super(props);
        //console.log("props in the auth page");
        //console.log(props);
        
    }

    

    
    render(){
        return (
            <div className="container-fluid">
                <div className="row authHeader">
                    <div className="col-md-6">
                    
                    <h4>Social Network</h4>
                    
                    
                    </div>
                    
                    <Login loggedIn={this.props.loggedIn}
                    changeLoginStatus={this.props.changeLoginStatus}/>
                    
                    
                </div>

                <div className="row">
                    <Register loggedIn={this.props.loggedIn}
                                changeLoginStatus={this.props.changeLoginStatus}/>
                    
                </div>
                
            
            </div>
            
        )
    }
}

export default AuthenticationPage;