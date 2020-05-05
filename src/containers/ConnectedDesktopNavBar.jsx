import { connect } from 'react-redux';
import DesktopNavBar from '../components/DesktopNavBar.jsx';
// Confirm no need to import React
const mapStateToProps = (state) => (
    {
        //Put user id here
    }
)

const ConnectedDesktopNavBar = connect(mapStateToProps)(DesktopNavBar)

export default ConnectedDesktopNavBar