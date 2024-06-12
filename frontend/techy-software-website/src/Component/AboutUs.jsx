import React from "react";
import "./AboutUs.css";
import Topbar from "./Topbar";
import Footer from "./Footer";

function AboutUS() {
  return (
    <div>
      <Topbar />
      <img className="ab" src="aboutus3.jpg" alt="About Us" />
      <div className="container mt-5">
        <h2>About Us</h2>
        <p className="info1">
          Welcome to <i>Techy Software</i>, where innovation meets quality. Our mission is to empower individuals and businesses through innovative software solutions, simplifying challenges, and elevating user experiences.
          <br />
          <img className="ab1" src="aboutus4.jpg" alt="About Us" />
          <br />
          At the core of our values is a commitment to continuous innovation, delivering high-quality, reliable products, prioritizing customer needs, operating with transparency and integrity, and fostering a collaborative and inclusive environment.
        </p>
        <br />
        <br />

        <h2>Our Journey</h2>
        <p className="info1">
          Founded in <i>2024</i>, <i>Techy Software</i> has been at the forefront of <i>Gaming Technology</i> since its inception. Over the years, we have embarked on a mission to revolutionize the software industry. Starting from humble beginnings, we have grown into a dynamic force, driven by innovation and a commitment to excellence.
          <br />
          <br />
          Our path has been marked by breakthroughs, challenges turned into opportunities, and a relentless pursuit of perfection. With a dedicated team, cutting-edge technology, and a passion for solving real-world problems, we've reached milestones that define our evolution.
          <br />
          <br />
          <img className="ab2" src="aboutus5.jpg" alt="Our Journey" />
          As we continue our journey, our focus remains on creating impactful solutions, fostering meaningful partnerships, and shaping the future of technology. Join us in celebrating the chapters that have shaped our story, and stay tuned for the exciting chapters yet to unfold.
        </p>
        <br />
        <br />

        <h2>Quality Assurance</h2>
        <p className="info1">
          At <i>Techy Software</i>, we are committed to delivering products of the highest quality. Our dedicated team of experts ensures that each product undergoes rigorous testing and meets the highest industry standards.
          <br />
          <br />
          It highlights the company's rigorous testing processes and adherence to industry standards. This section often outlines the comprehensive quality control measures implemented throughout the product development life cycle. It may also showcase certifications, quality benchmarks achieved, and the use of cutting-edge technologies to ensure that the products meet or exceed customer expectations.
          <br />
          <img className="ab3" src="aboutus6.jpg" alt="Quality Assurance" />
          Additionally, the QA section may convey the company's dedication to continuous improvement, customer feedback integration, and a customer-centric approach to guaranteeing excellence in every aspect of its offerings.
        </p>
        <br />
        <br />

        <h2>Innovation is Our Driving Force</h2>
        <p className="info1">
          Innovation is the heartbeat of our company. We constantly strive to bring cutting-edge solutions to our customers. Our team of talented engineers and designers work tirelessly to push the boundaries of <i>Gaming Technology</i>.
          <br />
          <br />
          The Innovation section of a product-based software company website showcases the company's commitment to groundbreaking solutions and cutting-edge technology. This section highlights the company's inventive spirit, emphasis on research and development, and its ability to stay ahead in a dynamic industry.
          <br />
          <br />
          <img src="aboutus7.jpg" alt="Innovation" className="ab4" />
          It may include information about proprietary technologies, unique features of products, and the company's approach to fostering creativity within its team. Success stories, patents, and collaborations with industry leaders may also be featured to demonstrate the company's impact on driving innovation in the software landscape. This section aims to instill confidence in customers and partners regarding the company's ability to deliver state-of-the-art solutions.
        </p>
        <br />
        <br />

        <h2>Meet Our Team</h2>
        <p className="info1">
          Our success is attributed to our exceptional team. Get to know the passionate individuals who contribute their expertise to make <i>Techy Software</i> a leader in <i>Gaming Technology</i>.
        </p>
        <div className="cd">
          <div className="card">
            <img src="achal.jpg" className="card-img-top" alt="Founder" />
            <div className="card-body">
              <h5 className="card-title">Founder</h5>
              <p className="card-text">
                As the visionary founder of <i>Techy Software</i>, <i>Achal Pandey</i> leads with a passion for technological innovation, driving the company towards excellence and shaping the future of software solutions.
              </p>
              <a href="https://www.linkedin.com/in/achal-pandey-81978a230/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
          <div className="card">
            <img src="pintu.jpeg" className="card-img-top" alt="HR" />
            <div className="card-body">
              <h5 className="card-title">Senior HR Recruiter</h5>
              <p className="card-text">
                As the Senior HR Recruiter at <i>Techy Software</i>, <i>Pintu Kumar Baranwal</i> is dedicated to sourcing top talent, fostering a collaborative work environment, and ensuring the growth and success of the team.
              </p>
              <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADoRucsB0t7giCDlqDfhZlp3YDoXxGDmwK8&keywords=Pintu%20Kumar%20Baranwal&origin=ENTITY_SEARCH_HOME_HISTORY&sid=zyM" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUS;
