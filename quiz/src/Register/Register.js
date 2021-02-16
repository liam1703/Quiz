import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import React from 'react';



class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""

        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
        // console.log(this.state.signInEmail);
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }


    onSubmitSignIn = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name

            })
        })
        .then(response => response.json())
        .then(user => {
            if(user){
                this.props.loadUser(user)
                this.props.onSignIn("mainquiz");
            }
        })
        // console.log(this.state)
        // this.props.onSignIn("mainquiz");
    }



    render(){
        const { onSignIn } = this.props
        return (
            <div className="Login">
                <Form>
                    <Button block size="lg" variant="info" className="regButton" onClick={() => onSignIn("signIn")}> {/*type="submit"*/} Already signed up click here!</Button>

                    <Form.Group size="lg" controlId="name">
                        <Form.Label className="email-label">Name</Form.Label>
                        <Form.Control 
                        autoFocus type="text"
                            onChange={this.onNameChange}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="email">
                        <Form.Label className="email-label">Email</Form.Label>
                        <Form.Control autoFocus type="email"
                            onChange={this.onEmailChange}
                        />
                    </Form.Group>


                    <Form.Group size="lg" controlId="password">
                        <Form.Label className="email-label">Password</Form.Label>
                        <Form.Control type="password"
                            onChange={this.onPasswordChange}
                        />
                    </Form.Group>



                    <Button block size="lg"  onClick={this.onSubmitSignIn}>Signup</Button>

                    
                </Form>
                
            </div>
        
            );}
    }
  
  export default Register

//   {/*type="submit"*/}