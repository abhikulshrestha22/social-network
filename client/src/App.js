import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Redirect,
  withRouter
} from 'react-router-dom';

import Home from './components/Home';
import InitialPage from './components/InitialPage';
import AuthenticationPage from './components/AuthenticationPage';
import { logInAction } from './actions/authActions';







class App extends Component {

  constructor(props){
    super(props);

    console.log("props in app");
    //this.props.logInAction();
  }

  // //initialize state
  //  state = { loggedIn:false,
  //             userId:''}
  
  
 
  // changeLoginStatus = (value)=>{
    
  //   console.log("changing the login status");
  //   this.setState({
  //     loggedIn:value
  //   })
  // }


  // componentDidMount(){
  //   //check whether the auth token is already present in the localstorage
  //   // and update the state accordingly
  //   if(localStorage.getItem('social_network')){
  //       var auth_token = localStorage.getItem('social_network')
  //   }
  // }
  
  handleClick =()=>{
    console.log("clicking me");
    this.props.logInAction();
  }

  // render(){
  //   return (
  //     <div>
  //       <button onClick={this.handleClick}>Click me to change login status</button>
  //     </div>
  //   )
  // }


  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={InitialPage} />
            <Route path="/home" component={Home}/>
          </div>
      </Router>
    )
  }
    

    // return (
    //   <Router>
    //     <div>
          
    //       <Route exact path="/" render={()=>(
    //         this.state.loggedIn? (
    //           <Redirect to='/home'/>
    //         ):(<Redirect to='/auth'/>)
    //       )}/>
    //       <Route path='/home' render={()=>(
    //         <Home {...this.state.loggedIn} />
    //       )}/>
    //       {/*======== Pass the loggedIn to know whether user is Authroized or not==============*/}
    //       <Route path='/auth' render={(props)=>(<AuthenticationPage {...props} 
    //                                   loggedIn={this.state.loggedIn}
    //                                   changeLoginStatus={this.changeLoginStatus}/>)}/>
    //     </div>
    //   </Router>
    // )
  //}
}


// const mapDispatchToProps = dispatch => {
//   return {
//     logInAction:()=>{
//       dispatch(logInAction())
//     }
//   }
// }


export default App;
//export default connect(null,mapDispatchToProps)(App);
