import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Layout = ({
  author, children, desc, name, since, version, logo,
}) => (
  <>
    <Header desc={desc} logo={logo} />
    <Main>
      {children}
    </Main>
    <Footer
      author={author}
      version={version}
      since={since}
      name={name}
    />
  </>
);

export default Layout;
