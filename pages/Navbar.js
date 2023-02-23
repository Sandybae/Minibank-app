import Interacts from "/components/navbar/Interacts";
import SocialLinks from "/components/navbar/SocialLinks";
import BankingType from "/components/navbar/BankingType";
import Link from "next/link";
import BankingServices from "../components/navbar/BankingServices";

const Navbar = () => {
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
        <div>
          <Link className="font-extrabold text-4xl" href="#">
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
};

export default Navbar;
