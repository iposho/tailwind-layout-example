import React from 'react';

const Main = ({ children }) => (
  <main className="w-screen py-4">
    {children || <div className="text-center">Main Container</div>}
  </main>
);

export default Main;
