import React from 'react';
// Libs import
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
// Assets import
import './aboutme.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about-me">
                <Container>
                    <Row className="justify-content-md-center">
                        <h1 className="title">A mon propos</h1>
                    </Row>
                    <Row>
                        <Col md={6} xs={12} className="hetic_logo">
                            <Image src="https://bit.ly/2BnCrKS" />
                        </Col>
                        <Col md={6} xs={12} className="hetic_infos">
                            <p>Après deux années passées à l'université de Paris-Est Marne-La-Vallée en <b>D.U.T. Services et Réseaux de Communication</b>, je choisis de m'orienter vers le Bachelor <b>Chef de projet multimédia - Spécialité Développement</b>.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;