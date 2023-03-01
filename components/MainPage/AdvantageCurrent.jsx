import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

function FourthPage() {
  return (
    <div className="items-left md:flex md:justify-around text-center  hover:bg-green-700 p-5">
      <div className="items-left md:w-1/2 text-left md:pl-20">
        <p className="text-4xl text-gray-700 my-5">Advantage Current Account</p>
        <p className="p-3 text-left font-bold text-4xl my-10 md:w-3/5">Get ahead with investments, insurance and a salary advance added to your banking</p>
        <Link href="/applynow" className="bg-green-900 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">
          APPLY NOW
        </Link>
        <button type="button" className="bg-green-900 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
      </div>
      <div className="items-left md:w-1/2 py-10 md:pl-20">
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Debit Card
        </div>
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Internet Banking
        </div>
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Mobile Banking
        </div>
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Standing Orders
        </div>
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Credit Card
        </div>
        <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5">
          <FaCheck className="mr-5 text-blue-300" />
          Advance Facility
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
