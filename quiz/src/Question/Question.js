import Card from 'react-bootstrap/Card'
import './question.css'
import Answer from '../Answer/Answer';
import Button from "react-bootstrap/Button";
import React, { Component } from 'react';
import {quizBody} from '../QandA';

class Question extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          qNum: 0,
          score: 0

      }}

    bestCheck = (currentScore) => {
        if(currentScore > this.bestScore){
            fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id,
              score: this.state.score
            })
          })
            .then(response => response.json())
        }
    }
    
    qCheck = (ans) => {

        console.log(ans)
        if(ans == quizBody[this.state.qNum].Answer){
            this.setState({score: this.state.score += 1 })
        }
        console.log(this.state.qNum)
        this.setState({qNum: this.state.qNum += 1})
        if(this.state.qNum >= quizBody.length){
            this.props.onSignIn("final");
            
            // this.setState({qNum: this.state.qNum = 0})
        }
    }

    render(){
        const {onSignIn, bestScore} = this.props
        const {qNum} = this.state
        let A = quizBody[qNum].A;
        let B = quizBody[qNum].B;
        let C = quizBody[qNum].C;
        let D = quizBody[qNum].D;
        // let bestScore = 3;
        return(
        <div>
            <Card className="sCard center">
                <Card.Body className="center">
                <span className="bestever">Your Best : {bestScore}</span> Score: {this.state.score}</Card.Body>
            </Card>
            <Card className="qCard center questions">
                <Card.Body className="center txt">{quizBody[qNum].Q} </Card.Body>
            </Card>
            <Answer ans={A} qCheck={this.qCheck}/>
            <Answer ans={B} qCheck={this.qCheck}/>
            <Answer ans={C} qCheck={this.qCheck}/>
            <Answer ans={D} qCheck={this.qCheck}/>

            <div className="center">
                <Button className="quizExit center" block size="lg" type="submit" onClick={() => onSignIn("signIn")}>Signout!</Button>
            </div>
      </div>

        )
    }

}
export default Question;
// function Question({onSignIn, quizBody, qNum, qCheck}) {
    
//     let A = quizBody[qNum].A;
//     let B = quizBody[qNum].B;
//     let C = quizBody[qNum].C;
//     let D = quizBody[qNum].D;
//     return (




//         <div>
//             <Card className="qCard center">
//                 <Card.Body className="center">Who are the current Premier League Champions?</Card.Body>
//             </Card>
//             <Answer ans={A} qCheck={this.qCheck}/>
//             <Answer ans={B} qCheck={this.qCheck}/>
//             <Answer ans={C} qCheck={this.qCheck}/>
//             <Answer ans={D} qCheck={this.qCheck}/>

//             <div className="center">
//                 <Button className="quizExit center" block size="lg" type="submit" onClick={() => onSignIn("signIn")}>Signout!</Button>
//             </div>
//       </div>





//         );
//     }
    
//     export default Question;