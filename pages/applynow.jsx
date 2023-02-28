import React from 'react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import Applyhead from '../components/Applynow/Applyhead';
import Applybody from '../components/Applynow/Applybody';
import SecurityFoot from '../components/Applynow/Securityfoot';
import BankingFoot from '../components/Applynow/Bankingfoot';

function ApplyNow() {
  return (
    <div>
      <div className="bg-cover bg-[url('/backgroundimg-1.jpg')] h-[80svh] relative " />
      <button type="button" className="absolute flex top-5 right-5 px-5 py-3 items-center bg-white text-violet-400 border rounded-md gap-3">
        English
        <FaChevronDown />
      </button>
      <div className="w-full max-w-4xl absolute top-24 left-24  border-0 rounded-md shadow-md py-3 px-8 bg-gradient-to-r from-gray-200 to-gray-400">
        <div><Applyhead /></div>
        <div><Applybody /></div>
      </div>
      <div className="flex flex-col place-items-end items-left m-5">
        <h1 className="text-violet-500 text-2xl font-bold">Personal Loan</h1>
        <p className="text-gray-500 text-xl">Ready to go wherever you want to go ...</p>
      </div>
      <div>
        <SecurityFoot />
      </div>
      <div>
        <BankingFoot />
      </div>
      <div className="flex justify-between py-2 px-4 bg-slate-600 text-lg">
        <div>Version 0.0.1</div>
        <div className="flex gap-2 items-center">
          <p>Powered by </p>
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
