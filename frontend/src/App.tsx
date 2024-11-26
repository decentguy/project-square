import React from 'react';
import Header from './components/Header';
import CaseStudies from './components/CaseStudies';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Nav from './components/Nav';
import 'bulma/css/bulma.min.css';
import Services from './components/Services';

const App: React.FC = () => {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Services />
      <CaseStudies />
      <Brands />
      <Footer />
    </div>
  );
};

export default App;
