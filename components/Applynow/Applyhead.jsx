import React from 'react';
import Link from 'next/link';

function Applyhead() {
  return (
    <div className="flex justify-between items-center m-4">
      <div>
        <h1 className="text-violet-700 font-extrabold text-3xl">MINIBANK</h1>
      </div>
      <div className="flex justify-around gap-2 font-bold">
        <p className="text-gray-500">Having Troubles?</p>
        <Link href="#a" className="text-violet-600">Get Help</Link>
      </div>
    </div>
  );
}

export default Applyhead;
