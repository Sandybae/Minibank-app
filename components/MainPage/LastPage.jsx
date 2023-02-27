import React from 'react';
import Link from 'next/link';
import {
  FaTelegramPlane, FaFacebookF, FaTwitter, FaArrowCircleUp,
} from 'react-icons/fa';

function LastPage() {
  return (
    <div className="flex justify-between m-10 text-gray-400 text-xl">
      <div className="flex gap-4 items-center">
        <Link href="#a">Share</Link>
        <a href="https://telegram.com" aria-label="chat"><FaTelegramPlane /></a>
        <a href="https://facebook.com" aria-label="chat"><FaFacebookF /></a>
        <a href="https://twitter.com" aria-label="chat"><FaTwitter /></a>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#a" aria-label="chat"><FaArrowCircleUp /></a>
        <p>Back to the top</p>
      </div>
    </div>
  );
}

export default LastPage;
