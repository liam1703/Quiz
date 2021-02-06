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
      name: "",
     
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001')
      .then(response => response.json())
      //console.log is shorthand for showing data
      .then(console.log)
  }

     onSignIn = (area) => {
       this.setState({route: area})
     }

     onLogin = (user) => {
       this.setState({name: user})
     }



  
  render(){
    
    
    const route = this.state.route;
    let page;
    if(route ==='signIn')
    {
      page = <SignForm className="center" onSignIn={this.onSignIn} onLogin={this.onLogin}/>
    } else if(route ==='mainquiz') {
      page = <Question className="center" onSignIn={this.onSignIn} quizBody={quizBody} /> 
    } else if(route === 'register'){
      page = <Register className="center" onSignIn={this.onSignIn}/>
    }

    return (
      <div className="App">
          <NavBar className="center"/>
          <h3 className="greet">Hello {this.state.name}</h3>
          {page} 
          
            

           
          
          

      </div>
    );
  }
}

export default App;
