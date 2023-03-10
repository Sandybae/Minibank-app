import React from 'react';
import Link from 'next/link';

function BankingType() {
  const typeOfBankings = [
    { name: 'Consumer Banking', link: '/' },
    { name: 'Commercial Banking', link: '/' },
    { name: 'Coperate and Investment Banking', link: '/' },
    { name: 'Group', link: '/' },
  ];

  return (
    <div>
      {typeOfBankings.map((type) => (
        <Link href="/" key={type.name} className="ml-4 text-xs">
          {type.name}
        </Link>
      ))}
    </div>
  );
}

export default BankingType;
