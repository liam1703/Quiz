import Card from 'react-bootstrap/Card'
import './answer.css'


function Answer({ans, qCheck}) {
    return (

        <div>
            <Card className="center ACard">
                <Card.Body onClick={() => qCheck()}>{ans}</Card.Body>
            </Card>
      </div>




        );
    }
    
    export default Answer;