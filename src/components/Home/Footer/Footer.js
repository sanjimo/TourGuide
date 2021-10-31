import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="mb-0 bg-light w-100">
            <div className="bg-light text-dark ms-4 me-4">
                <Row className="pt-4 text-success" lg={3} xs={1}>
                    <Col className="text-success mb-2">
                        <h5 className="fw-bold"><img alt="logo" src={logo} width="50"/><span className="text-warning ms-1">Tour</span><span className="text-success">Guide</span></h5>
                        <p>House #6 , Road-2</p>
                        <p>Nayabazar,Dhaka-1100</p>
                        <p>Bangladesh</p>
                    </Col>
                    <Col className="text-success mb-2">
                        <h5 className="fw-bold text-warning">Services</h5>
                        <p><i className="fas fa-plane-departure me-2"></i>Booking Ticket</p>
                        <p><i className="fas fa-globe-asia me-2"></i>Planning Tours</p>
                        <p><i className="fas fa-medkit me-2"></i>Travel Insurance</p>
                        <p><i className="fas fa-hand-holding-usd me-2"></i>Best Price Guarantee</p>
                    </Col>
                    <Col className="text-success mb-2">
                        <h5 className="fw-bold text-warning">CONTACT</h5>
                        <p className="text-success"><i className="fas fa-phone-alt"></i> 01987654321</p>
                        <p className="text-success"><i className="far fa-envelope"></i> tour_guide@gmail.com</p>
                        <p>24 hours (seven days a week)</p>
                    </Col>
                </Row>
            </div>
            <hr className="bg-success w-75 mx-auto"/>
            <Container>
                <Row className="mt-1">
                    <Col className="pb-1"><small className="text-success">Copyright <i className="far fa-copyright text-success"></i> 2021 by <span className="text-warning">Tour</span>Guide.</small></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;