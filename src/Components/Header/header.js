import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const height = {height: this.state.height};
        return (
            <div id="header" style={height}>
                <Grid fluid="true">
                    <Row>
                        <Col md={12} className="header_infos center">
                            <h1>Clément Gendry</h1>
                            <h3>Développeur Front-End pour Rakuten</h3>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Header.propTypes = {
    height: PropTypes.string,
};

Header.defaultProps = {
    height: '500px',
};

export default Header;