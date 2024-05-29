import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Hello Django with React</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/other">Other Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default App;
