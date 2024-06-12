import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import ProductServices from './Component/ProductServices';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Techy Software</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product-services" element={<ProductServices />} />
      </Routes>
    </Router>
  );
}

export default App;