import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

function SecurityFoot() {
  return (
    <div className="bg-violet-100 p-10">
      <diiv className="flex gap-2 items-center m-4 text-2xl text-black">
        <p>Security</p>
        <FaShieldAlt className="text-violet-600" />
      </diiv>
      <div className="grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p>Dear Customers,</p>
          <p>
            Beware of scammers on the Internet!
            Bank employees never ask for the full
            number of your card (only the last four digits),
            as well as a three-digit code on the back of the card.
            In case of suspicion, contact the Bank at
            <a href="tel:+22921315030" className="text-violet-500">+229 21 31 50 30</a>
            <a href="mailto:minibankenquiries@minibank.com" className="text-violet-500">minibankenquiries@minibank.com</a>
          </p>
        </div>
        <div className="">
          <p>
            Verify that the web address in the address bar
            starts with “https”. Otherwise, do not enter the
            bank website
          </p>
        </div>
        <div className="">
          <p>
            Ecobank is committed to providing you with an
            informative and secure banking experience.
            To find guidance on how to get the most from
            our products and services, and what you can
            do to protect yourself when using them click here
          </p>
          <a href="https://minibank.com" className="text-violet-500">https://www.ecobank.com/personal-banking/help-security</a>
        </div>
      </div>
    </div>
  );
}

export default SecurityFoot;
