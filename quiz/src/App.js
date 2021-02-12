import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js';
import Clock from './Clock/Clock.js';
import SignForm from './SignForm/SignForm.js';
import Register from './Register/Register.js';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import Final from './Final/Final.js';
import {quizBody} from './QandA';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route: "signIn",
      name: "",
      user: {
        id: "",
        name: "",
        email: "",
        score: 0
      }
     
    }
  }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      score: data.score
    }})
  }

  // componentDidMount(){
  //   fetch('http://localhost:3001')
  //     .then(response => response.json())
  //     //console.log is shorthand for showing data,
  //     .then(console.log)
  // }

     onSignIn = (area) => {
       this.setState({route: area})
       console.log(this.state.route)
     }

     onLogin = (user) => {
       this.setState({name: user})
     }



  
  render(){
    
    
    const route = this.state.route;
    let page;
    let heading;
    if(route ==='signIn')
    {
      page = <SignForm className="center" loadUser={this.loadUser} onSignIn={this.onSignIn} onLogin={this.onLogin}/>
    } else if(route ==='mainquiz') {
      page = <Question className="center" onSignIn={this.onSignIn} quizBody={quizBody} /> 
      heading = <h3 className="greet">Hello, {this.state.user.name}</h3>
    } else if(route === 'register'){
      page = <Register className="center" loadUser={this.loadUser} onSignIn={this.onSignIn}/>
    } else if(route === 'final'){
      page = <Final />
    }

    return (
      <div className="App">
          <NavBar className="center"/>
          {heading}
          
          {page} 
          
            

           
          
          

      </div>
    );
  }
}

export default App;
