import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignForm.css";



function SignForm({onSignIn, onLogin}) {
    return (
        <div className="Login">
            <Form>
                <Button block size="lg" variant="info" className="regButton" onClick={() => onSignIn("register")}> Register</Button>

                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email"/>
                </Form.Group>


                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Button block size="lg" type="submit" 
                onClick={() => {onSignIn("mainquiz"); onLogin("Liam");}
                }>Login</Button>

                
            </Form>
            
        </div>
      
        );
  }
  
  export default SignForm;