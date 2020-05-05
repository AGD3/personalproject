import React from 'react';
//Import nav bars and css files 
import Home from '../components/Home.jsx';
import DesktopNavBar from '../components/DesktopNavBar.jsx';

const BrokerFinderView = (props) => (
    <div>
        <DesktopNavBar />
        <Home />
    </div>
)

export default BrokerFinderView;