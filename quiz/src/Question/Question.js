import Card from 'react-bootstrap/Card'
import './question.css'
import Answer from '../Answer/Answer';
import Button from "react-bootstrap/Button";

function Question({onSignIn, quizBody, qNum, qCheck}) {
    
    let A = quizBody[qNum].A;
    let B = quizBody[qNum].B;
    let C = quizBody[qNum].C;
    let D = quizBody[qNum].D;
    return (




        <div>
            <Card className="qCard center">
                <Card.Body className="center">Who are the current Premier League Champions?</Card.Body>
            </Card>
            <Answer ans={A} qCheck={this.qCheck}/>
            <Answer ans={B} qCheck={this.qCheck}/>
            <Answer ans={C} qCheck={this.qCheck}/>
            <Answer ans={D} qCheck={this.qCheck}/>

            <div className="center">
                <Button className="quizExit center" block size="lg" type="submit" onClick={() => onSignIn("signIn")}>Signout!</Button>
            </div>
      </div>





        );
    }
    
    export default Question;