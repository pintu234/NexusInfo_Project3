import React from "react";
import "./Centerbar.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  {
    id: 1,
    src: "./t1.jpg",
    alt: "To Amplify Human Creativity and Ingenuity.",
  },
  { id: 2, src: "./t2.jpg", alt: "Futuristic Vision" },
  { id: 3, src: "./t3.jpg", alt: "Worldwide Connectivity" },
  { id: 4, src: "./t4.jpg", alt: "Artistic Tech " },
];
const Centerbar = () => {
  return (
    <div>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <div className="container">
        <br />
        <h2>What We Do</h2>
        <div className="do">
          <img src="do.jpg" alt="do"></img>
        </div>
        <p className="info">
          At Techy Software, we specialize in developing innovative solutions
          that empower businesses to thrive in the dynamic digital landscape.
          Our dedicated team of experts is committed to crafting cutting-edge
          products tailored to meet the unique needs of our clients. From
          conceptualization to execution, we bring ideas to life, leveraging the
          latest technologies and industry best practices. <br />
          <br />
          We excel in delivering high-quality products that redefine user
          experiences and drive business growth. Our comprehensive suite of
          services includes product design, development, testing, and ongoing
          support. Whether you're launching a new venture or seeking to enhance
          your existing offerings, we provide scalable and sustainable solutions
          that align with your vision and goals. <br />
          <br />
          With a focus on collaboration and client satisfaction, we work closely
          with our partners to understand their challenges and aspirations. Our
          iterative development process ensures that the final product not only
          meets but exceeds expectations. From robust software applications to
          cutting-edge hardware solutions, Techy Software is your trusted
          partner in transforming ideas into reality.
          <br />
          <br />
          Explore the possibilities with us and let's embark on a journey of
          innovation, efficiency, and success.
        </p>
      </div>
      <br />
      <div className="container">
        <div className="bottom">
          <h2>Who We Are</h2>
          <div className="do-1">
            <img src="do1.jpg" alt="do"></img>
          </div>
          <p className="info">
            At Techy Software, we are a team of passionate innovators driven by
            a shared vision—to revolutionize industries through technology.
            Established with a commitment to excellence, we bring together a
            diverse group of experts, each contributing unique skills and
            perspectives to our collective success.
            <br /> <br />
            Our company ethos is rooted in creativity, collaboration, and a
            relentless pursuit of excellence. We pride ourselves on being at the
            forefront of technological advancements, constantly pushing
            boundaries to create products that not only meet but exceed market
            expectations. <br />
            <br />
            What sets us apart is our unwavering dedication to our clients. We
            believe in forging lasting partnerships, understanding your business
            intricacies, and tailoring our solutions to suit your needs.Techy
            Software is not just a service provider; we are your strategic ally
            in navigating the ever-evolving landscape of technology.
            <br />
            <br />
            Transparency, integrity, and a client-centric approach define who we
            are. From conceptualization to implementation, we prioritize
            quality, innovation, and timely delivery. As we continue to grow and
            evolve, our commitment to empowering businesses through
            transformative solutions remains steadfast.
            <br /> <br />
            Discover the strength of collaboration, the power of innovation, and
            the assurance of a trusted partner—Techy Software, where ideas take
            shape, and possibilities are limitless.
          </p>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="info">
          <h2>Our Clients</h2>
          At Techy Software, our success is intertwined with the success of our
          clients. We take pride in partnering with a diverse range of
          businesses, from startups to industry leaders. Each collaboration is a
          testament to our commitment to delivering tailored solutions that
          address the unique challenges our clients face.
          <br />
          <img className="logo" src="logos.jpg" alt="logos" />
        </div>
      </div>
    </div>
  );
};
export default Centerbar;
