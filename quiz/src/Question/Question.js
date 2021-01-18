import Card from 'react-bootstrap/Card'
import './question.css'
import Answer from '../Answer/Answer';
import Button from "react-bootstrap/Button";

function Question({onSignIn}) {
    return (

        <div>
            <Card className="qCard center">
                <Card.Body className="center">Who are the current Premier League Champions?</Card.Body>
            </Card>
            <Answer />
            <Answer />
            <Answer />
            <Answer />

            <div className="center">
                <Button className="quizExit center" block size="lg" type="submit" onClick={() => onSignIn("signIn")}>Signout!</Button>
            </div>
      </div>





        );
    }
    
    export default Question;