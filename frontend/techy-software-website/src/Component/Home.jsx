import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Centerbar from "./Centerbar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Techy Software</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Topbar />
        <Centerbar />
        <Footer />
      </div>
    );
  }
}

export default Home;
