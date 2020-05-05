//Import nav bars and css files 

import React from 'react';
import Home from '../components/Home.jsx';
import DesktopNavBar from '../components/DesktopNavBar.jsx';


const BizView = (props) => (
    <div>
        <DesktopNavBar />
        <Home />
    </div>
)

export default BizView;