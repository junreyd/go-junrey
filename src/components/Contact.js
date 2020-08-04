import React, { Component } from 'react';
import swal from 'sweetalert';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '', name: '', email: '', subject: '' };
    this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
              <div className="streak streak-photo streak-md" style={{backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20%2811%29.jpg")'}}>
                <div className="mask flex-center rgba-indigo-strong">
                  <div className="white-text smooth-scroll mx-4">
                    <h2 className="h2-responsive wow fadeIn mb-5"><i className="fas fa-quote-left" aria-hidden="true" /> Design is not
                      just what it looks like and feels like. Design is how it works. <i className="fas fa-quote-right" aria-hidden="true" /></h2>
                    <h5 className="text-center font-italic wow fadeIn" data-wow-delay="0.2s">~ Steve Jobs</h5>
                  </div>
                </div>
              </div>
              <div id="contact" className="container">
              {/* Section: Contact v.2 */}
              <section className="section contact-section mt-4 mb-5">
                {/* Section heading */}
                <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s">Contact <strong>me</strong>
                </h2>
                {/* Section sescription */}
                <p className="text-center w-responsive mx-auto mb-5 pb-4 wow fadeIn" data-wow-delay="0.2s">Whether it's project you want to talk about or just want some advice feel free to contact me, I'm best contacted by sending a message below or direct to my email. But you can use any other service you like. Hey, come on don't be shy give it a try. </p>
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  {/* First column */}
                  <div className="col-md-8 mb-5">
                    <form className="needs-validation" novalidate>
                      {/* First row */}
                      <div className="row">
                        {/* First column */}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <div className="md-form mb-0">
                              <input type="text" id="form41" className="form-control" value={this.state.name} name="name" onChange={(event)=>this.handleChange(event, "name")} required  />
                              <label for="form41" className>Your name</label>
                            </div>
                          </div>
                        </div>
                        {/* Second column */}
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <div className="md-form mb-0">
                              <input type="text" id="form52" className="form-control" value={this.state.email} name="email" onChange={(event)=>this.handleChange(event, "email")} required />
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
                            <input type="text" id="form51" name="subject" className="form-control" value={this.state.subject} onChange={(event)=>this.handleChange(event, "subject")} required />
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
                            <textarea type="text" id="form76" className="md-textarea form-control" rows={3} value={this.state.message} defaultValue={""} name="message" onChange={(event)=>this.handleChange(event, "message")} required />
                            <label htmlFor="form76">Your message</label>
                          </div>
                        </div>
                      </div>
                      {/* Third row */}
                    </form>
                    <div className="text-center text-md-left mt-4"> <a className="btn btn-primary" onClick={this.handleSubmit}>Send</a> </div>
                  </div>
                  {/* First column */}
                  {/* Second column */}
                  <div className="col-md-4">
                    <ul className="contact-icons list-unstyled text-center">
                      <li><i className="fas fa-map-marker-alt fa-2x" />
                        <p>Cebu City, Cebu, Philippines</p>
                      </li>
                      <li><i className="fas fa-phone fa-2x" />
                        <p>+639566011002</p>
                      </li>
                      <li><i className="fas fa-envelope fa-2x" />
                        <p>ducjunrey@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                  {/* Second column */}
                </div>
              </section>
              {/* Section: Contact v.2 */}
            </div>
            </div>
        );
    }

    
    handleChange(evt, field) {
    this.setState({ [field]: evt.target.value });
  }

  handleSubmit (event) {
  event.preventDefault();

  console.log(this.state.message);
  if (!this.state.message || !this.state.name || !this.state.email || !this.state.subject) {
    alert("All fields are required!")
  } else {
    const templateId = 'template_ajNbnATr';
    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email, subject_to: this.state.subject})
    this.setState({
      message: '',
      name: '',
      email: '',
      subject: ''
    });
  }
  
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
        swal("Awesome!", "Your message was successfully sent!", "success");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}

export default Contact;