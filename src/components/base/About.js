import React from "react";

function About({profileImage}) {

    return (
        <section id="aboutSection" className="common-style">
            <div className="container">
                <div className="row">
                  <div className="heading-info">
                    <h1 className="title">Who am I?</h1>
                    <span className="underline"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="offset-md-1 col-lg col-md-10 col-sm-12 d-flex align-items-center">  
                    <p>
                      My name is <span className="text-primary">Sonali Kushwaha</span>. I am currently working as a Software Development Engineer at Analytics Vidhya. Right now, I am exploring various tools and techniques related to Front-End Development. I am familiar with HTML, CSS, Bootstrap, Tailwind CSS, ReactJS, JavaScript, etc. I, somewhat, know Django. 
                    </p>
                  </div>
                  <div className="col-lg col-sm-12 position-relative">
                    <img src={profileImage} class="img-fluid d-block mx-auto" width="250" alt="Sonali Kushwaha Photo"/>
                    <span className="back-circle"></span>
                  </div>
                </div>
            </div>
        </section>
    );
}

export default About;
