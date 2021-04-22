import React from 'react';

import randomColor from '../../../tools/randomColor';

const getCopyrightDate = (year, author) => {
  if (!year || !author) {
    return false;
  }

  const currentYear = new Date().getFullYear().toString();

  return currentYear === year
    ? `© ${year} ${author}`
    : `© ${year}...${currentYear} ${author}`;
};

const Footer = ({ since, author, name }) => (
  <footer
    className="w-full flex"
    style={{ backgroundColor: randomColor() }}
  >
    <div className="container mx-auto flex py-4 flex-col
    lg:flex-row justify-between items-center font-mono text-xs"
    >
      <div className="flex p-4">
        <p>
          Powered by&nbsp;
          <a
            target="_blank"
            href="https://random-data-api.com/"
            rel="noreferrer"
            className="text-gray-800 font-bold hover:text-gray-500 hover:underline"
          >
            {name}
          </a>
        </p>
      </div>
      <div className="flex p-4">
        {getCopyrightDate(since, author)}
      </div>
    </div>
  </footer>
);

export default Footer;
