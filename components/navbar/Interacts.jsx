import React from 'react';
import { FaSearch, FaPhone, FaSignInAlt } from 'react-icons/fa';
import LabelIcon from '../utilities/LabelIcon';

function Interacts() {
  const interact = [
    {
      text: 'Search', icon: FaSearch, className: 'search', onClick: () => null,
    },
    {
      text: 'Contact Us', icon: FaPhone, className: 'contact', onClick: () => null,
    },
    {
      text: 'LogIn', icon: FaSignInAlt, className: 'log-in', onClick: () => null,
    },
  ];
  return (
    <div className="flex gap-20 text-lg">
      {interact.map((item) => (
        <LabelIcon {...item} key={item.text} />
      ))}
    </div>
  );
}

export default Interacts;
