import Link from 'next/link';
import Interacts from '../components/navbar/Interacts';
import SocialLinks from '../components/navbar/SocialLinks';
import BankingType from '../components/navbar/BankingType';
import BankingServices from '../components/navbar/BankingServices';

function Navbar() {
  return (
    <nav>
      <div className="flex justify-around p-2 text-s text-gray-900 bg-violet-200">
        <div>
          <BankingType />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
      <div className="flex justify-around bg-violet-900 p-8 text-gray-200 border-b border-gray-500">
        <div className="flex flex-1 justify-between gap-20">
          <Link
            type="name"
            className="p-3 font-extrabold text-2xl md:text-4xl"
            href="#a"
          >
            MINIBANK
          </Link>
        </div>
        <div className="flex justify-around">
          <Interacts />
        </div>
      </div>
      <div>
        <BankingServices />
      </div>
    </nav>
  );
}

export default Navbar;
