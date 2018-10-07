import React from 'react';

class Home extends React.Component{

    constructor(props){
        super(props);

        console.log("props in home");
    }

    render(){
        return (
            <div>Hi!!! I am home</div>
        )
    }
}

export default Home;