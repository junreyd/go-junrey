import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
          <div>
          {/* Navigation & Intro */}
          <header>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
              <div className="container">
                <a className="navbar-brand" href="#">asfd</a>
                {/* <img src="../img/UpdatedLOGO.png" alt="" srcset=""> */}
                {/* <img class="navbar-brand" src="../img/UpdatedLOGO.png" class="rounded float-left" alt="..."> */}
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
                      <a className="nav-link"><i className="fab fa-facebook-f light-green-text-2" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fab fa-twitter light-green-text-2" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fab fa-instagram light-green-text-2" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Intro Section */}
            <div id="home" className="view jarallax" data-jarallax="{&quot;speed&quot;: 0.2}" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/forest1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <div className="mask rgba-white-strong">
                <div className="container h-100 d-flex justify-content-center align-items-center">
                  <div className="row smooth-scroll">
                    <div className="col-md-12 pt-3">
                      <div className="white-text text-center pt-5">
                        <h1 className="display-2 mb-4 dark-grey-text wow fadeIn">I am <strong>Junrey D</strong></h1>
                        <h5 className="text-uppercase font-weight-bold wow fadeIn" data-wow-delay="0.4s"><mark>Web developer &amp;
                            graphic designer</mark></h5>
                        <a href="#about" className="btn btn-floating btn-large wow fadeIn" data-wow-delay="0.4s" data-offset={100}><i className="fas fa-angle-down" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Navigation & Intro */}
          {/* Main layout */}
          <main>
            {/* First container */}
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
            {/* First container */}
            {/* Second container */}
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
                          <h5 className="font-weight-bold mb-3">JavaScript developer</h5>
                        </div>
                        <p className="font-weight-bold ml-1 dark-grey-text mb-2">March 2011 - June 2012 (1 year, 3 Month)</p>
                        <p className="mb-0 ml-1 light-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                          quas, eos officia maiores ipsam ipsum dolores. </p>
                      </blockquote>
                      <blockquote className="blockquote bq-warning">
                        <div className="row"> <i className="fas fa-briefcase fa-x mb-1 mr-3 ml-3" aria-hidden="true" />
                          <h5 className="font-weight-bold mb-3">Web developer</h5>
                        </div>
                        <p className="font-weight-bold ml-1 dark-grey-text mb-2"><strong>March 2005 - May 2011 (6 years, 2
                            Month)</strong></p>
                        <p className="mb-0 ml-1 light-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit integer
                          posuere.</p>
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
            {/* Second container */}
            {/* Third container */}
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
            {/* Third container */}
            {/* Streak */}
            <div className="streak streak-photo streak-md" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2811%29.jpg")'}}>
              <div className="mask flex-center rgba-indigo-strong">
                <div className="white-text smooth-scroll mx-4">
                  <h2 className="h2-responsive wow fadeIn mb-5"><i className="fas fa-quote-left" aria-hidden="true" /> Design is not
                    just what it looks like and feels like. Design is how it works. <i className="fas fa-quote-right" aria-hidden="true" /></h2>
                  <h5 className="text-center font-italic wow fadeIn" data-wow-delay="0.2s">~ Steve Jobs</h5>
                </div>
              </div>
            </div>
            {/* Streak */}
            {/* Fourth container */}
            <div className="container">
              {/* Fourth section */}
              <section id="works" className="section mb-5">
                {/* Section title */}
                <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">My <strong>projects</strong>
                </h2>
                {/* Section description */}
                <p className="text-center w-responsive mx-auto wow fadeIn my-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quia iste provident, voluptatum voluptatibus aut modi aspernatur autem impedit, eius, debitis earum
                  voluptatem. Quaerat hic aspernatur laborum magni earum. At, officiis!</p>
                {/* First row */}
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  {/* First column */}
                  <div className="col-md-12 mb-5">
                    {/* Lightbox */}
                    <div id="mdb-lightbox-ui" />
                    <div className="mdb-lightbox">
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg" className="img-fluid z-depth-1" />
                        </a>
                      </figure>
                      <figure className="col-md-4">
                        <a href="https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg" data-size="1600x1067">
                          <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" className="img-fluid z-depth-1" />
                        </a>
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
            {/* Fourth container */}
            {/* Contact form */}
            <div id="contact" className="container">
              {/* Section: Contact v.2 */}
              <section className="section contact-section mt-4 mb-5">
                {/* Section heading */}
                <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">Contact <strong>me</strong>
                </h2>
                {/* Section sescription */}
                <p className="text-center w-responsive mx-auto mb-5 pb-4 wow fadeIn" data-wow-delay="0.2s">Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
                  totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam. </p>
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  {/* First column */}
                  <div className="col-md-8 mb-5">
                    <form>
                      {/* First row */}
                      <div className="row">
                        {/* First column */}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <div className="md-form mb-0">
                              <input type="text" id="form41" className="form-control" />
                              <label htmlFor="form41" className>Your name</label>
                            </div>
                          </div>
                        </div>
                        {/* Second column */}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <div className="md-form mb-0">
                              <input type="text" id="form52" className="form-control" />
                              <label htmlFor="form52" className>Your email</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* First row */}
                      {/* Second row */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <input type="text" id="form51" className="form-control" />
                            <label htmlFor="form51" className>Subject</label>
                          </div>
                        </div>
                      </div>
                      {/* Second row */}
                      {/* Third row */}
                      <div className="row">
                        {/* First column */}
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <textarea type="text" id="form76" className="md-textarea form-control" rows={3} defaultValue={""} />
                            <label htmlFor="form76">Your message</label>
                          </div>
                        </div>
                      </div>
                      {/* Third row */}
                    </form>
                    <div className="text-center text-md-left mt-4"> <a className="btn btn-primary">Send</a> </div>
                  </div>
                  {/* First column */}
                  {/* Second column */}
                  <div className="col-md-4">
                    <ul className="contact-icons list-unstyled text-center">
                      <li><i className="fas fa-map-marker-alt fa-2x" />
                        <p>New York, NY 10012, USA</p>
                      </li>
                      <li><i className="fas fa-phone fa-2x" />
                        <p>+ 01 234 567 89</p>
                      </li>
                      <li><i className="fas fa-envelope fa-2x" />
                        <p>contact@mdbootstrap.com</p>
                      </li>
                    </ul>
                  </div>
                  {/* Second column */}
                </div>
              </section>
              {/* Section: Contact v.2 */}
            </div>
            {/* Contact form */}
            <div className="streak1">
              <div className="flex-center">
                <ul className="list-unstyled">
                  <li>
                    <h2 className="h2-responsive mt-5 wow fadeIn">Want an outstanding project?</h2>
                  </li>
                  <li>
                    <h5 className="h5-responsive wow fadeIn" data-wow-delay="0.2s">Just send me a message!</h5>
                  </li>
                </ul>
              </div>
            </div>
            {/* Customers carousel */}
          </main>
          {/* Main layout */}
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
          {/* SCRIPTS */}
          {/* JQuery */}
          {/* Bootstrap tooltips */}
          {/* Bootstrap core JavaScript */}
          {/* MDB core JavaScript */}
        </div>
        );
    }
}

export default Home;