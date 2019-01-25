import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Header = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>
                <p>Hello I am Clement</p>
            </Col>
            <Col xs={6} md={4}>
                <p>Welcome Home</p>
            </Col>
        </Row>
    </Grid>
);

export default Header;