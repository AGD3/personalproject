// import { Link } from 'react-router';
import React from 'react';
import '../styles/main.css';
import '../styles/home.css';
import MiddleHomeSection from './MiddleHomeSection.jsx';
import InfoFooter from './InfoFooter.jsx';
import Footer from './Footer.jsx';

const Home = (props) => {
    //Probably need to pass down image from api or amazon on props and set image here
    return (
        <div>
            <div className='homeContainer'>
                <div className='videoSection'>
                    <header className='searchBoxHeader'>
                        <h1>Find your dream business</h1>
                    </header>
                    <section className='searchBox'>
                        <div className='searchBody'>
                            {/* <label className='buy'>Buy</label> */}
                            <label className='buy' href='../views/BuyView.jsx'>Buy</label>
                            {/* <a className="headerLink" to='/buy'> */}
                            <label className='lease'>Lease</label>
                            <label className='sell'>Sell</label>
                            <label className='bizEstimate'>Bizestimate</label>
                        </div>
                        <div className='searchInputAndButton'>
                            <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' type='text' />
                            <button className='searchButton' type='submit'>
                                <h5 className='searchBtnText'>Search</h5>
                            </button>
                        </div>
                    </section>
                </div>
                <div className='editBizFact'>
                    <div className='updateText'>
                        <h3 className='bizFacts'>Edit your business facts</h3>
                        <h4 className='updateDetails'>Update business details faction into your Bizestimate.</h4>
                    </div>
                    <button className='getStarted'>Get started</button>
                </div>  
            </div>
            <MiddleHomeSection />
            <InfoFooter />
            <Footer />
        </div>
    )
}

export default Home;