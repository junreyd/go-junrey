import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="streak1">
                <div className="flex-center">
                    <ul className="list-unstyled">
                    <li>
                        <h2 className="h2-responsive mt-5 wow fadeIn">Want an outstanding project?</h2>
                    </li>
                    <li>
                        <h5 className="h5-responsive wow fadeIn" data-wow-delay="0.2s">Just send me a message!</h5>
                    </li>
                    <li>
                    <p className="text-center w-responsive mx-auto wow fadeIn my-5">
                    Made with <i className="fas fa-heart"></i>&nbsp;
                    <span>React JS</span>
                    </p>
                    </li>
                    </ul>
                </div>
                </div>
                {/* Customers carousel */}
                {/* Scrollspy */}
                <div className="dotted-scrollspy clearfix d-none d-sm-block">
                    <ul className="nav smooth-scroll flex-column">
                    <li className="nav-item"><a className="nav-link" href="#home"><span /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#about"><span /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills"><span /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#works"><span /></a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact"><span /></a></li>
                    </ul>
                </div>
                {/* Scrollspy */}
            </div>
        );
    }
}

export default Footer;