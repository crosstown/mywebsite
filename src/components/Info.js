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
                            Hello, I'm Fernando. I'm a passionate software developer with in-depth understanding of the
                            principles and best practices of SCM process.
                            Besides programming I enjoy music, travel, and tech innovation. I'm also interested in
                            renewable energy, human rights and animal welfare
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Info;