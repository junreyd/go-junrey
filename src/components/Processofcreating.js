import React, { Component } from 'react';

class Processofcreating extends Component {
    render() {
        return (
            <div>
                <div className="container">
                {/* Section About */}
                <section className="section feature-box my-5 pb-5">
                    {/* Section title */}
                    <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">Process of
                    <strong>creating</strong></h2>
                    <p className="text-center w-responsive mx-auto wow fadeIn my-5" data-wow-delay="0.2s">When you think of building a website, your thoughts rotate around two main issues – price and time. These two values depend largely on the size and scope of the project. To outline the whole development process, you can create a website development timeline, adding tasks, and establishing milestones for your project. It is the best way to track your project implementation to make sure you keep up with the deadline.</p>
                    {/* Nav tabs */}
                    <ul className="nav md-tabs nav-justified blue" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#panel1" role="tab">01. Research</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#panel2" role="tab">02. Design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#panel3" role="tab">03. Development</a>
                    </li>
                    </ul>
                    {/* Tab panels */}
                    <div className="tab-content card">
                    {/* Panel 1 */}
                    <div className="tab-pane fade in show active" id="panel1" role="tabpanel">
                        <br />
                        <div className="row mt-2">
                        <div className="col-2 text-center"> <i className="fas fa-search fa-3x mb-1 grey-text" aria-hidden="true" />
                        </div>
                        <div className="col-9 mb-2">
                            <p className="dark-grey-text">This stage, the stage of discovering and researching, determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. Such kind of a website development questionnaire helps to develop the best strategy for further project management. A well-described and detailed plan based on this pre-development data can protect you from spending extra resources on solving the unexpected issues such as design changing or adding the functionality that wasn’t initially planned.</p>
                        </div>
                        </div>
                    </div>
                    {/* Panel 1 */}
                    {/* Panel 2 */}
                    <div className="tab-pane fade" id="panel2" role="tabpanel">
                        <br />
                        <div className="row mt-2">
                        <div className="col-2 text-center"> <i className="fas fa-pencil-alt fa-3x mb-1 grey-text" aria-hidden="true" />
                        </div>
                        <div className="col-9 mb-2">
                            <p className="dark-grey-text">During the design phase, website takes shape. All the visual content, such as images, photos, and videos is created at this step. It can be a graphic sketch or an actual graphic design. The primary function of the layout is to represent the information structure, visualize the content, and demonstrate the basic functionality. </p>
                        </div>
                        </div>
                    </div>
                    {/* Panel 2 */}
                    {/* Panel 3 */}
                    <div className="tab-pane fade" id="panel3" role="tabpanel">
                        <br />
                        <div className="row mt-2">
                        <div className="col-2 text-center"> <i className="fas fa-code fa-3x mb-1 grey-text" aria-hidden="true" /> </div>
                        <div className="col-9 mb-2">
                            <p className="dark-grey-text">At this step, finally start creating the website itself. Frameworks and CMS should be implemented to make sure that the server can handle the installation and set-up smoothly. All static web page elements that were designed during the mock-up and layout creation should be created and tested. Project should be agile and flexible enough to have a possibility to change the website according to users’ feedback or spirit of the time.</p>
                        </div>
                        </div>
                    </div>
                    {/* Panel 3 */}
                    </div>
                    {/* Tab panels */}
                </section>
                {/* Section */}
                </div>
            </div>
        );
    }
}

export default Processofcreating;