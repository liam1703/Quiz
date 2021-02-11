import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignForm.css";
import React from 'react';


class SignForm extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
        // console.log(this.state.signInEmail);
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword

            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onSignIn("mainquiz");
                }
            })
        // console.log(this.state)
        // this.props.onLogin("Liam");
        // this.props.onSignIn("mainquiz");
    }



    render(){
        const { onSignIn, onLogin } = this.props
        return (
            <div className="Login">
                <Form>
                    <Button block size="lg" variant="info" className="regButton" onClick={() => onSignIn("register")}> Register</Button>

                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" onChange={this.onEmailChange}/>
                    </Form.Group>


                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={this.onPasswordChange}/>
                    </Form.Group>

                    <Button block size="lg" type="submit" 
                    // onClick={() => {this.onSubmitSignIn(); this.onSignIn("mainquiz"); this.onLogin("Liam");}}
                    onClick={this.onSubmitSignIn}
                    >Login</Button>

                    
                </Form>
                
            </div>
        
            );}
    }
  
  export default SignForm;