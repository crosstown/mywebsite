import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import mypic from "./fer.jpg"
class Info extends Component {
    render() {
        return (
            <div>
                <Card border="light" style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={mypic} />
                    <Card.Body>
                        <Card.Title>Fernando Simon</Card.Title>
                        <Card.Text>
                            Some quick example to build on the card titel and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Info;