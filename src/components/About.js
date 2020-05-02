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
                    <p className="text-center w-responsive mx-auto wow fadeIn my-5" data-wow-delay="0.2s">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum dolores reiciendis ad voluptas,
                    animi obcaecati adipisci sapiente mollitia.</p>
                    {/* First row */}
                    <div className="row features-big text-center wow fadeIn" data-wow-delay="0.4s">
                    {/* First column */}
                    <div className="col-md-4 mb-5">
                        {/* Panel */}
                        <div className="card card-body hoverable">
                        <i className="fas fa-laptop fa-3x mb-4" aria-hidden="true" />
                        <h5 className="font-weight-bold text-uppercase mb-4">Freelancer</h5>
                        <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                        <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                        <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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