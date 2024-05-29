import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import OtherComponent from './OtherComponent';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/other" element={<OtherComponent />} />
        </Routes>
    </Router>
);

export default AppRouter;
