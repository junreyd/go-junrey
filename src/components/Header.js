import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


class Header extends Component {

    render() {
        return (
            <Router>
            <div>
                {/* Navigation & Intro */}
                <header>
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbardev">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={`${process.env.PUBLIC_URL}/assets/img/UpdatedLOGO.png`} alt="Logo" style={{"height": '30px'}} /></a>
                        {/* <a className="navbar-brand" href="/">Home</a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto smooth-scroll">
                            <li className="nav-item">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#about" data-offset={100}>About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#skills" data-offset={100}>Skills</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#works" data-offset={100}>Works</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact" data-offset={100}>Contact</a>
                            </li>
                        </ul>
                        {/* Social Icon  */}
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                            <a href="https://www.facebook.com/ducJunrey" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-facebook-f light-green-text-2" /></a>
                            </li>
                            <li className="nav-item">
                            <a href="https://twitter.com/ducjunrey" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-twitter light-green-text-2" /></a>
                            </li>
                            <li className="nav-item">
                            <a href="https://github.com/junreyd" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-github light-green-text-2" /></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    {/* Intro Section */}
                    <div id="home" className="jarallax" data-speed="{0.2}" style={{backgroundImage: `url('https://blog.hubspot.com/hubfs/html-css-javascript.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    <div className="mask rgba-white-strong">
                        <div className="container h-100 d-flex justify-content-center align-items-center">
                        <div className="row smooth-scroll">
                            <div className="col-md-12 pt-3">
                            <div className="white-text text-center pt-5">
                                <h1 className="display-2 mb-4 dark-grey-text wow fadeIn">I am <strong>Junrey D</strong></h1>
                                <h5 className="text-uppercase font-weight-bold wow fadeIn" data-wow-delay="0.4s"><mark className="mark">Web developer &amp;
                                    graphic designer</mark></h5>
                                <a href="#about" className="btn btn-floating btn-large wow fadeIn developer" data-wow-delay="0.4s" data-offset={100}><i className="fas fa-angle-down" aria-hidden="true" /> </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* Navigation & Intro */}
            </div>
        
            </Router>
         );
    }
}

export default Header;