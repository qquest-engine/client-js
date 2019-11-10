import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';


function Home() {
    return (
        <div className="home home__wrp" >
            <h1 className="home__title">Home pages</h1>
            <Link to='/quest' className="home__link">Move to quest</Link>
        </div>
    );
}

export default Home;