import React from 'react';
// Libs import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets import
import './footer.css';

const Footer = () => (
    <div className="footer">
        <p className="footnote">
            Made with
            <FontAwesomeIcon icon={['fab', 'react']} />
            and
            <FontAwesomeIcon icon="heart" />
        </p>
    </div>
);

export default Footer;