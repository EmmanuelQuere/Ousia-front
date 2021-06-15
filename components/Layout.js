import React from 'react';
import Navigation from './Navigation';
import Footer from './footer';

const Layout = ({ children }) => {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow pb-10">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )

}

export default Layout;
