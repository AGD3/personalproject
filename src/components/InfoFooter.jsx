import React from 'react';
import '../styles/infoFooter.css';

const InfoFooter = (props) => {
    return (
        <div className='infoFooter'>
            <footer className='subFooter'>
                <div className='content'>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Business Acquisitions</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Browse all Businesses</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Albuquerque Businesses</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Atlanta Businesses</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Austin Businesses</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Baltimore Businesses</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Leases</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Lease Buildings</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Atlanta Office Space for Lease</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Austin Office Space for Lease</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Balitmore Office Space for Lease</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Boston Office Space for Lease</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Corporate Lending Rates</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Current commercial rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Alaska commercial rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Alabama commercial rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Arkansas commercial rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Arizona commercial rates</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Browse Businesses</h6>
                        <ul className='infolist'>
                            <li className='listItem'>
                                <a href='#'>California</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Texas</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>New York</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Florida</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Illinois</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default InfoFooter;