import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import Link from 'next/link';

function LoginButton() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Link href="#a" onClick={toggle}>
        <FaLock className="ml-3" />
        <p>LogIn</p>
      </Link>
      {open
        && (
        <div>
          <div className="text-gray-900 text-lg">
            <FaLock />
            <p>Login to Internet Banking</p>
          </div>
          <div>
            <p className="text-gray-900 text-lg">Internet Banking</p>
            <button type="button" className="bg-violet-800 text-white text-lg">Omni Lite</button>
            <button type="button" className="bg-violet-800 text-white text-lg">Omni Plus</button>
          </div>
          <div>
            <p className="text-gray-900 text-lg">Login</p>
            <button type="button" className="bg-violet-800 text-white text-lg">CashXpress</button>
          </div>
        </div>
        )}
    </div>
  );
}

export default LoginButton;
