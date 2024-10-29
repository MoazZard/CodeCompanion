import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {

    return (
        <footer className="bg-dark text-white py-4 mt-auto shadow-lg">
            <Container>
                <Row>
                    <Col md={4} className="text-center mb-3">
                        <h5>About Codecompanion</h5>
                        <p>
                            CodeCompanion is your go-to AI assistant for coding. Here to help you better grasp anything programming related.
                        </p>
                    </Col>

                    <Col md={4} className="text-center mb-3 ms-auto">
                        <h5>Contact</h5>
                        <p>Email: moazzardab@gmail.com</p>
                    </Col>
                </Row>

                <div className="text-center pt-3">
                    <p className="mb-0"> {new Date().getFullYear()} CodeCompanion. </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;