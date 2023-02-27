import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react';

function ContactButton() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <Link href="#a" onClick={toggle}>
          <FaPhone className="ml-3" />
          <p>Contact</p>
        </Link>
      </div>
      <div>
        {open
                && (
                <div>
                  <div className="flex justify-start text-gray-900 m-3">
                    <FaPhone />
                    <p>Contact</p>
                  </div>
                  <div>
                    <button type="button" className="bg-violet-800 text-white border-b border-black m-3 p-4">Get in Touch</button>
                    <button type="button" className="bg-violet-800 text-white border-b border-black m-3 p-4">Find a service</button>
                  </div>
                </div>
                )}
      </div>
    </div>
  );
}

export default ContactButton;
