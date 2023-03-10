import React from 'react';
import Link from 'next/link';
import {
  FaRegComments, FaYoutube,
  FaFacebookF, FaTwitter, FaInstagram,
  FaLinkedin, FaRegCopyright, FaSearch,
} from 'react-icons/fa';

function SecondFooter() {
  return (
    <div className="bg-slate-900 p-4">
      <div className="md:flex md:justify-around border-b border-gray-400 py-7">
        <div className="collapse md:flex md:visible">
          <input
            className="border rounded-l-sm"
            type="text"
            placeholder="SEARCH"
          />
          <div className="bg-lime-400 text-white p-4 rounded-r-sm">
            <Link href="#a"><FaSearch /></Link>
          </div>
        </div>
        <div className="flex justify-center gap-10 text-white text-3xl">
          <a href="https://facebook.com/live-chat" aria-label="chat"><FaRegComments /></a>
          <a href="https://youtube.com" aria-label="chat"><FaYoutube /></a>
          <a href="https://facebook.com" aria-label="chat"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="chat"><FaTwitter /></a>
          <a href="https://instagram.com" aria-label="chat"><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="chat"><FaLinkedin /></a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center text-blue-400 p-3 gap-2">
        <FaRegCopyright />
        <p>MINIBANK 2023</p>
      </div>
    </div>
  );
}

export default SecondFooter;
