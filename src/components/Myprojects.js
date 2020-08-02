import React, { Component } from 'react';

class Myprojects extends Component {
    render() {
        return (
            <div>
                <div className="container">
              {/* Fourth section */}
              <section id="works" className="section mb-5">
                {/* Section title */}
                <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">My <strong>projects</strong>
                </h2>
                {/* Section description */}
                <p className="text-center w-responsive mx-auto wow fadeIn my-5">Some of my projects I developed </p>
                {/* First row */}
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  {/* First column */}
                  <div className="col-md-12 mb-5">
                    {/* Lightbox */}
                    <div id="mdb-lightbox-ui" />
                    <div className="mdb-lightbox">
                      <figure className="col-md-4">
                        <a href={`${process.env.PUBLIC_URL}/assets/img/scsit1.png`} data-size="1600x1067">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/scsit1.png`} className="img-fluid z-depth-1" />
                        </a>
                        <p className="text-center w-responsive mx-auto wow fadeIn my-5">
                        <a href="https://github.com/junreyd/scsit" data-size="1600x1067">https://github.com/junreyd/scsit</a>
                        </p>
                      </figure>
                      <figure className="col-md-4">
                        <a href={`${process.env.PUBLIC_URL}/assets/img/ccstalentnight.png`} data-size="1600x1067">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/ccstalentnight.png`} className="img-fluid z-depth-1" />
                        </a>
                        <p className="text-center w-responsive mx-auto wow fadeIn my-5">
                        <a href="https://github.com/junreyd/ccstalentnight" data-size="1600x1067">https://github.com/junreyd/ccstalentnight</a>
                        </p>
                      </figure>
                      <figure className="col-md-4">
                        <a href={`${process.env.PUBLIC_URL}/assets/img/ogtong.png`} data-size="1600x1067">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/ogtong.png`} className="img-fluid z-depth-1" />
                        </a>
                        <p className="text-center w-responsive mx-auto wow fadeIn my-5">
                        <a href="https://github.com/junreyd/ogtong" data-size="1600x1067">https://github.com/junreyd/ogtong</a>
                        </p>
                      </figure>
                      <figure className="col-md-4">
                        <a href={`${process.env.PUBLIC_URL}/assets/img/scsitfeedback.png`} data-size="1600x1067">
                          <img src={`${process.env.PUBLIC_URL}/assets/img/scsitfeedback.png`} className="img-fluid z-depth-1" />
                        </a>
                        <p className="text-center w-responsive mx-auto wow fadeIn my-5">
                        <a href="https://github.com/junreyd/sitfeedback" data-size="1600x1067">https://github.com/junreyd/sitfeedback</a>
                        </p>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(59).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(70).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                    </div>
                    {/* Lightbox */}
                  </div>
                  {/* First column */}
                </div>
                {/* First row */}
              </section>
              {/* Fourth section */}
              <hr />
            </div>
            </div>
        );
    }
}

export default Myprojects;