import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home
            <div>
                <Link to="/register">
                    To Register
                </Link>
            </div>
        </div>
    );
};

export default Home;
