import React from 'react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import ContactButton from './ContactButton';
import LoginButton from './LoginButton';

function SmallScreen() {
  return (
    <div className="flex justify-around items-center bg-violet-900 p-8 text-gray-200 border-b border-gray-500">
      <div className="flex flex-1 justify-between gap-20">
        <Link className="p-3 font-extrabold text-2xl md:text-4xl" href="#a">
          MINIBANK
        </Link>
      </div>
      <div className="flex justify-between gap-10">
        <div>
          <LoginButton />
        </div>
        <div>
          <ContactButton />
        </div>
        <div>
          <MenuButton />
        </div>
      </div>

    </div>
  );
}

export default SmallScreen;
