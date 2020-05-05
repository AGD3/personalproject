import React from 'react';
import '../styles/footer.css';

const Footer = (props) => {
    return (
        <div>
            <div className='footerWrapper'>
                <nav className='brandLinks'>
                    <ul className='footerList'>
                        <li>
                            <a href='#'>
                                <span>Bizillow Group Brands:</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>BizillowX</a>
                        </li>
                        <li>
                            <a href='#'>BizillowX1</a>
                        </li>
                        <li>
                            <a href='#'>BizillowX2</a>
                        </li>
                        <li>
                            <a href='#'>BizillowX3</a>
                        </li>
                        <li>
                            <a href='#'>BizillowX4.com</a>
                        </li>
                    </ul>
                </nav>
                
                <footer className='footer'>
                    <div className='navSeparator'>
                        <nav className='links'>
                            <ul className='footerLinks'>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>Bizestimates</a>
                                </li>
                                <li>
                                    <a href='#'>Research</a>
                                </li>
                                <li>
                                    <a href='#'>Careers</a>
                                </li>
                                <li>
                                    <a href='#'>Help</a>
                                </li>
                                <li>
                                    <a href='#'>Advertise</a>
                                </li>
                                <li>
                                    <a href='#'>Terms of use & Privacy</a>
                                </li>
                                <li>
                                    <a href='#'>Ad Choice</a>
                                </li>
                                <li>
                                    <a href='#'>Cookie Preferences</a>
                                </li>
                                <li>
                                    <a href='#'>Blog</a>
                                </li>
                                <li>
                                    <a href='#'>Data Science</a>
                                </li>
                                <li>
                                    <a href='#'>AI & ML</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='socialMedia'>
                        <ul className='socialIcons'>
                            <li>© 2020-2025 Bizillow</li>
                            <li>
                                <div className='followUs'>
                                    <span>Follow Us</span>
                                    <a className='facebook' href='#'>
                                        <span className='facebookIcon'>F</span>
                                    </a>
                                    <a className='twitter' href='#'>
                                        <span className='twitterIcon'>T</span>
                                    </a>
                                    <a className='googlePlus' href='#'>
                                        <span className='googlePlusIcon'>G</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;