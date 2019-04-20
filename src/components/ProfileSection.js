import React, {Component} from 'react';
import Info from "./Info";
import Profile from "./Profile";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class ProfileSection extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <Info />
                    </Col>
                    <Col sm>
                        <Profile />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfileSection;