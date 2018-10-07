import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';
import AuthenticationPage from './AuthenticationPage';

class InitialPage extends React.Component{

    constructor(props){
        super(props);
        console.log("props on initial page")
        console.log(props);
    }

    render(){
        if(this.props.loggedIn)
            return (
                <Home/>
            )
        return (
            <AuthenticationPage/>
        )
        
    }
}

const mapStateToProps = state =>(
    {loggedIn:state.loggedIn}
)

InitialPage = connect(mapStateToProps)(InitialPage);

export default InitialPage;