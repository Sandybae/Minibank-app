import Link from 'next/link';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

function FirstFooter() {
  return (
    <div className="grid bg-slate-700 text-base text-green-100 px-20 py-10">
      <h1 className="p-5">Ecobank Banking</h1>
      <div className="md:flex gap-20">
        <div className="p-7">
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Consumer Banking</Link>
          </div>
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Group Banking</Link>
          </div>
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Coperate and Investment Banking</Link>
          </div>
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Commercial Banking</Link>
          </div>
        </div>
        <div className="p-7">
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Security</Link>
          </div>
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Help Center</Link>
          </div>
          <div className="flex px-15 py-2">
            <FaCaretRight className="mt-1" />
            <Link href="#a">Contact Us</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FirstFooter;
