import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";



class Register extends React.Component ({onSignIn}) {
    render(){
        return (
            <div className="Login">
                <Form>
                    <Button block size="lg" variant="info" className="regButton" onClick={() => onSignIn("signIn")}> {/*type="submit"*/} Already signed up click here!</Button>

                    <Form.Group size="lg" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control autoFocus type="text"/>
                    </Form.Group>

                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email"/>
                    </Form.Group>


                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <Button block size="lg" type="submit" onClick={() => onSignIn("mainquiz")}>Signup</Button>

                    
                </Form>
                
            </div>
        
            );}
    }
  
  export default Register;