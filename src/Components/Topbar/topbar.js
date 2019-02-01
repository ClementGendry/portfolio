import React from 'react';
// Libs import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Assets import
import './topbar.css';
import pdf from '../../Assets/cvitae.pdf'

const TopBar = () => (
    <div className="topbar">
        <a href="https://github.com/ClementGendry" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href={pdf} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="file-pdf" />
        </a>
    </div>
);

export default TopBar;