import React from "react";
import "./ProductServices.css";
import Topbar from "./Topbar";
import Footer from "./Footer";

function ProductServices() {
  return (
    <div>
      <Topbar />
      <img src="p1.jpg" alt="p1" className="p1" />
      <br />
      <br />
      <div className="container">
        <div className="info2">
          <h2>Product & Services</h2>
          <p>
            Techy Software, as a prominent gaming company, excels in a diverse
            array of products and services tailored to the dynamic landscape of
            the gaming industry. The company is recognized for its proficiency
            in game development, creating captivating and innovative experiences
            across various genres.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="info2">
          <h2>Online Gaming Solutions</h2>
          <p>
            Elevate your multiplayer gaming experience with our online gaming
            solutions. From server setup to matchmaking algorithms, we enhance
            social features to ensure seamless multiplayer interactions.
          </p>
          <div className="mm">
            <img className="img-fluid rounded-5" src="gam1.jpg" alt="gam1" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="info2">
          <h2>Quality Assurance</h2>
          <p>
            We prioritize quality with rigorous QA and testing processes. Our
            commitment is to deliver bug-free, polished games that meet the
            highest standards of excellence.
          </p>
          <div className="mm">
            <img className="img-fluid rounded-5" src="game2.jpg" alt="game2" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="info2">
          <h2>Game Art and Animation:</h2>
          <p>
            Offering services in creating visually stunning game art, 2D/3D
            animations, and special effects to enhance the overall aesthetics of
            the games.
          </p>
          <div className="mm">
            <img className="img-fluid rounded-5" src="game3.jpg" alt="game3" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductServices;
