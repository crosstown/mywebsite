import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return (
            <footer>
                <hr/>
                <Container>
                    <a href="https://www.linkedin.com/in/fernandojsimon" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a href="https://github.com/crosstown" className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a href="https://www.facebook.com/fernando.simon.16" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;