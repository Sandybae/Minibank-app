import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

function Applybody() {
  return (
    <div className="flex">
      <div className="w-1/3 my-10">
        <div className="border border-gray-300 px-8 py-3">
          <Link href="#a" className="text-violet-500 text-md">Current Account</Link>
        </div>
        <div className="border-x border-gray-300">
          <div className="flex gap-4 items-center text-md p-3 text-gray-700">
            <FaCheckCircle className="text-violet-800" />
            <span>Debit Card</span>
          </div>
          <div className="flex gap-4 items-center text-md p-3 text-gray-700">
            <FaCheckCircle className="text-violet-800" />
            <span>Ecobank Online</span>
          </div>
          <div className="flex gap-4 items-center text-md p-3 text-gray-700">
            <FaCheckCircle className="text-violet-800" />
            <span>Mobile Banking</span>
          </div>
          <div className="flex gap-4 items-center text-md p-3 text-gray-700">
            <FaCheckCircle className="text-violet-800" />
            <span>Standing Orders</span>
          </div>
        </div>
        <div className="border border-gray-300 px-8 py-3">
          <Link href="#a" className="text-violet-500 text-md">Savings Account</Link>
        </div>
      </div>
      <div className="flex flex-col max-w-full mx-auto">
        <p className="font-bold text-2xl m-3">Account Country</p>
        <p className="text-gray-500 text-lg m-3">Please choose country for opening account</p>
        <div className="m-5">
          <input
            className="border rounded-lg border-gray-200 text-lg p-2 w-full"
            type="text"
            placeholder="Benin"
          />
        </div>
        <div className="flex justify-center">
          <button type="button" className="m-3 border rounded-md border-gray-300 bg-white text-violet-500 hover:bg-gray-300 hover:text-violet-500 px-6 py-2">Back</button>
          <button type="button" className="m-3 border-0 rounded-md bg-violet-500 text-white hover:bg-violet-700 px-6 py-2">Next</button>
        </div>
        <div className="flex justify-center m-8 gap-2">
          <p className="text-gray-600">Have an account?</p>
          <Link href="#a" className="text-violet-600">Login</Link>
        </div>
      </div>
    </div>

  );
}

export default Applybody;
