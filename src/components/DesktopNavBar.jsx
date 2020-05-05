import React from 'react';
// import { Link } from 'react-router';
import '../styles/desktopNavBar.css';
import MainLogo from '../styles/billow-logo.png';

const DesktopNavBar = (props) => {
    return (
        <header className="mainHeader">
            <img src={ MainLogo } className='mainLogo' alt='' />
            <nav className="desktopNav">
                <a className="headerLink" href='/buy'>
                    <span className="buyLink">Buy</span>
                </a>

                
{/* Confirm:  "leaseLink, mortgagesLink, delegated .css from .desktopNav, etc. " */}

                <a className="headerLink" href='/lease'>
                    <span className="leaseLink">Lease</span>
                </a>
                <a className="headerLink" href='/sell'>
                    <span className="sellLink">Sell</span>
                </a>
                {/* <a className="headerLink" href='/commercialLoanLink'> */}
                <a className="headerLink" href='https://sbaloanprogram.com/'>
                    <span className="commercialLoanLink">Commercial Loan</span>
                </a>
                {/* <a className="headerLink" to='/brokerFinder'> */}
                <a className="headerLink" href='https://www.entrepreneur.com/article/217807'>
                    <span className="brokerFinderLink">Broker Finder</span>
                </a>
                {/* <a className="headerLink" to='/businessStructure'> */}
                <a className="headerLink" href='https://www.fdic.gov/about/diversity/sbrp/311.pdf'>
                    <span className="businessStructureLink">Business Structure</span>
                </a>
                {/* <a className="headerLink" to='/more'> */}
                <a className="headerLink" href='https://www.investopedia.com/articles/markets/100515/how-start-your-own-private-equity-fund.asp'>
                    <span className="moreLink">More</span>
                </a>
            </nav>
        </header>
    )
}

export default DesktopNavBar; 