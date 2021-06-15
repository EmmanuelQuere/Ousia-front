import React from 'react';
import Navigation from './Navigation';
import Footer from './footer';

const Layout = ({ children }) => {

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )

}

export default Layout;
