import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

function BankingFoot() {
  return (
    <div className="flex justify-left bg-slate-400 py-10 px-6 gap-20">
      <div className="flex flex-col">
        <div className="text-2xl font-bold text-violet-700 m-3">
          <p>MINIBANK Banking</p>
        </div>
        <div className="flex justify-center text-xl font-extrabold m-2 gap-5">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col text-gray-800">
        <Link href="#a" className="m-2">Personal Banking</Link>
        <Link href="#a" className="m-2">Group Banking</Link>
        <Link href="#a" className="m-2">Corperate and Investment Banking</Link>
        <Link href="#a" className="m-2">Commercial Banking</Link>
      </div>
      <div className="flex flex-col text-gray-800">
        <Link href="#a" className="m-2">Security</Link>
        <Link href="#a" className="m-2">Help Center</Link>
        <Link href="#a" className="m-2">Contact</Link>
      </div>
    </div>
  );
}

export default BankingFoot;
