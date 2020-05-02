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
                    <p className="text-center w-responsive mx-auto wow fadeIn my-5" data-wow-delay="0.2s"> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum dolores reiciendis ad voluptas,
                    animi obcaecati adipisci sapiente mollitia.</p>
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
                            <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                            minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur.
                            Tempora, placeat ratione porro voluptate odit minima.</p>
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
                            <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                            minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur.
                            Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.</p>
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
                            <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                            minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur.
                            Tempora, placeat ratione porro voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.</p>
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