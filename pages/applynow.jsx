import React from 'react';
import Applyhead from '../components/Applynow/Applyhead';
import Applybody from '../components/Applynow/Applybody';

function ApplyNow() {
  return (
    <div>

      <div className="bg-cover bg-[url('/backgroundimg-1.jpg')] h-[80svh] relative " />
      <div className="w-full max-w-4xl absolute top-24 left-24  border-0 rounded-md shadow-md py-3 px-8 bg-gradient-to-r from-gray-200 to-gray-400">
        <div><Applyhead /></div>
        <div><Applybody /></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-violet-500 text-3xl font-bold">Personal Load</h1>
        <p className="text-gray-500 text-xl">Ready to go wherever you want to go ...</p>
      </div>
    </div>
  );
}

export default ApplyNow;
