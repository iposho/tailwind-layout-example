import React from 'react';

const Header = ({ name }) => (
  <header className="container mx-auto pb-4 pt-4 flex justify-center">
    <div className="flex items-center flex-no-shrink text-red-700 p-4">
      <span
        className="font-semibold text-2xls tracking-wide font-mono"
      >
        {name}
      </span>
    </div>
  </header>
);

export default Header;
