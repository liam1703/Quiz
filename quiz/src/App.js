import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js';
import Clock from './Clock/Clock.js';
import SignForm from './SignForm/SignForm.js';
import Register from './Register/Register.js';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import {quizBody} from './QandA';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route: "signIn",
     
    }
  }

     onSignIn = (area) => {
       this.setState({route: area})
     }



  
  render(){
    
    
    const route = this.state.route;
    let page;
    if(route ==='signIn')
    {
      page = <SignForm className="center" onSignIn={this.onSignIn}/>
    } else if(route ==='mainquiz') {
      page = <Question className="center" onSignIn={this.onSignIn} quizBody={quizBody} /> 
    } else if(route === 'register'){
      page = <Register className="center" onSignIn={this.onSignIn}/>
    }

    return (
      <div className="App">
          <NavBar className="center"/>
          {page} 
          
            

           
          
          

      </div>
    );
  }
}

export default App;
