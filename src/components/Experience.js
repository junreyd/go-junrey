import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{backgroundColor: '#f3f3f5'}}>
                <div className="container py-4 pt-4">
                    {/* Second section */}
                    <section id="skills">
                    {/* First row */}
                    <div className="row py-5">
                        {/* First column */}
                        <div className="col-lg-6 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
                        {/* Section heading */}
                        <div className="d-flex justify-content-start">
                            <h4 className="text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn" data-wow-delay="0.2s">My
                            <strong>experience</strong></h4>
                        </div>
                        {/* Description */}
                        <blockquote className="blockquote bq-warning mb-4">
                            <div className="row"> <i className="fas fa-briefcase fa-x mb-1 mr-3 ml-3" aria-hidden="true" />
                            <h5 className="font-weight-bold mb-3">Senior developer</h5>
                            </div>
                            <p className="font-weight-bold ml-1 dark-grey-text mb-2">July, 2013 - Present (4 years)</p>
                            <p className="mb-0 ml-1 light-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </blockquote>
                        <blockquote className="blockquote bq-warning mt-1 mb-4">
                            <div className="row"> <i className="fas fa-briefcase fa-x mb-1 mr-3 ml-3" aria-hidden="true" />
                            <h5 className="font-weight-bold mb-3">Graphic Designer and Video Animator</h5>
                            </div>
                            <span className="mb-0 ml-1 light-grey-text">Minglanilla, Cebu, Philippines</span>
                            <p className="font-weight-bold ml-1 dark-grey-text mb-2"><strong>January 2018 - May 2018 (5 months)</strong></p>
                            <p className="mb-0 ml-1 light-grey-text">•	Designed artwork for initial client concepts to final production preparation for various screen-printed materials.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Collaborated and worked closely with riggers, modelers, textures, creative leads and animators to design and developed animations for various digital projects.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Developed and designed movement animations, characters animations, facial animations, environments, special effects, and performed other story/animation tasks as requested.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Using Adobe Photoshop, Illustrator, Premiere, After Effects, Camtasia, and iClone for animated designs, characters, and time-based visual that complied with the storyboard or visual strategy created by the agency.</p>
                        </blockquote>
                        <blockquote className="blockquote bq-warning">
                            <div className="row"> <i className="fas fa-briefcase fa-x mb-1 mr-3 ml-3" aria-hidden="true" />
                            <h5 className="font-weight-bold mb-3">Web developer (Intern)</h5>
                            </div>
                            <span className="mb-0 ml-1 light-grey-text">LGU Municipality of Bantayan Is., Cebu, Philippines</span>
                            <p className="font-weight-bold ml-1 dark-grey-text mb-2"><strong>Nov. 2015 – March. 2016 (5 months)</strong></p>
                            <p className="mb-0 ml-1 light-grey-text">•	Solely responsible for creating and designing municipal website blog.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Carry out quality assurance tests to discover errors and optimize usability.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Redesigned existing website to improve user experience and incorporated SEO techniques thereby increasing daily traffic by 30%.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Develop project concept and maintain optimal workflow.</p>
                            <p className="mb-0 ml-1 light-grey-text">•	Joined web developer team daily meetings to learn more about development of project scopes.</p>

                        </blockquote>
                        </div>
                        {/* First column */}
                        {/* Second column */}
                        <div className="col-lg-5 offset-lg-1 col-md-12 mb-4 wow fadeIn" data-wow-delay="0.4s">
                        {/* Second heading */}
                        <div className="d-flex justify-content-start">
                            <h4 className="text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn" data-wow-delay="0.2s">Development
                            <strong>Skills</strong></h4>
                        </div>
                        {/* Description */}
                        <p className="black-text text-uppercase font-weight-bold" align="justify">Java Script</p>
                        <div className="md-progress">
                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="black-text text-uppercase font-weight-bold pt-3" align="justify">CSS3</p>
                        <div className="md-progress">
                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="black-text text-uppercase font-weight-bold pt-3" align="justify">HTML5</p>
                        <div className="md-progress">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="black-text text-uppercase font-weight-bold pt-3" align="justify">Bootstrap</p>
                        <div className="md-progress">
                            <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="black-text text-uppercase font-weight-bold pt-3" align="justify">PHP</p>
                        <div className="md-progress">
                            <div className="progress-bar" role="progressbar" style={{width: '53%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        {/* Second column */}
                    </div>
                    {/* First row */}
                    </section>
                    {/* Second section */}
                </div>
                </div>
            </div>
        );
    }
}

export default Experience;