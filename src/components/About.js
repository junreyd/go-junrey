import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                {/* Section About */}
                <section id="about" className="section feature-box mb-5">
                    {/* Section title */}
                    <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">About <strong>me</strong></h2>
                    <p className="text-center w-responsive mx-auto wow fadeIn my-5" data-wow-delay="0.2s">“I'm a Front End and Back End Developer from Cebu, Philippines. I enjoy taking complex problems and turning them into simple and more creative functionalities with beautiful interface. I also love the logic and structure of coding and always strive to write elegant and efficient code.”<br></br>
                    When I'm not in coding, you'll find me in the online mind games - chess.com or lichess.</p>
                    {/* First row */}
                    <div className="row features-big text-center wow fadeIn" data-wow-delay="0.4s">
                    {/* First column */}
                    <div className="col-md-4 mb-5">
                        {/* Panel */}
                        <div className="card card-body hoverable">
                        <i className="fas fa-laptop fa-3x mb-4" aria-hidden="true" />
                        <h5 className="font-weight-bold text-uppercase mb-4">Freelancer</h5>
                        <p className="dark-grey-text">Maximize your business with modern software technology.</p>
                        </div>
                        {/* Panel */}
                    </div>
                    {/* First column */}
                    {/* Second column */}
                    <div className="col-md-4 mb-5">
                        {/* Panel */}
                        <div className="card card-body yellow hoverable">
                        <i className="fas fa-code fa-3x mb-4" aria-hidden="true" />
                        <h5 className="font-weight-bold text-uppercase mb-4">Developer</h5>
                        <p className="dark-grey-text">I'm a professional who develop high end web application for your business.</p>
                        </div>
                        {/* Panel */}
                    </div>
                    {/* Second column */}
                    {/* Third column */}
                    <div className="col-md-4 mb-5">
                        {/* Panel */}
                        <div className="card card-body hoverable">
                        <i className="fas fa-pencil-alt fa-3x mb-4" aria-hidden="true" />
                        <h5 className="font-weight-bold text-uppercase mb-4">Designer</h5>
                        <p className="dark-grey-text">Well-designed websites offer much more than just aesthetics.</p>
                        </div>
                        {/* Panel */}
                    </div>
                    {/* Third column */}
                    </div>
                    {/* First row */}
                </section>
                {/* Second section */}
                </div>
            </div>
        );
    }
}

export default About;