import React from 'react';

const TailwindExample = () => (
  <div className="flex w-full py-2 justify-center">
    <div className="container mx-auto flex flex-col">
      <div className="flex justify-center p-8 bg-blue-300 mb-6">
        1
      </div>
      <div className="flex justify-between">
        <div className="flex w-4/5 mr-2 flex-col">
          <div className="flex flex-row justify-between w-full mb-4">
            <div className="flex w-1/3 bg-pink-300 p-8 justify-center items-center mr-0">2</div>
            <div className="flex w-2/3 px-6">
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-yellow-100 col-span-3 p-4 h-24">1</div>
                <div className="bg-red-200 col-span-3 p-4">2</div>
                <div className="bg-blue-300 col-span-2 p-4">3</div>
                <div className="bg-green-600 p-4">4</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-8 bg-blue-300 mr-6">
            1
          </div>
        </div>
        <div className="flex w-1/5 bg-gray-300 p-4">4</div>
      </div>
    </div>
  </div>
);

export default TailwindExample;
