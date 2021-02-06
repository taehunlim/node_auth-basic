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
            <div>
                <Link to="/verify-email">
                    To verification
                </Link>
            </div>
            <div>
                <Link to="/authenticate">
                    To Sign In
                </Link>
            </div>
            <div>
                <Link to="/forgot-password">
                    To find password
                </Link>
            </div>
            <div>
                <Link to="/reset-password">
                    To reset password
                </Link>
            </div>
        </div>
    );
};

export default Home;
