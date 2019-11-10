import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Quest() {
    return (
        <div className="quest quest__wrp" >
            <h1 className="quest__title">Quest page</h1>
            <Link to='/' className="quest__link">Move to home</Link>
        </div>
    );
}

export default Quest;