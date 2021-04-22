import React from 'react';

import randomColor from '../../../tools/randomColor';

const Header = ({ logo }) => (
  <header
    className="w-full flex"
    style={{ backgroundColor: randomColor() }}
  >
    <div className="container mx-auto flex justify-between">
      <div className="flex items-center flex-no-shrink p-4 flex-row">
        <img className="h-10 lg:h-20" src={logo} alt="" />
      </div>
    </div>
  </header>
);

export default Header;
