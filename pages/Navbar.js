import Interacts from "/components/navbar/Interacts";
import SocialLinks from "/components/navbar/SocialLinks";
import BankingType from "/components/navbar/BankingType";
import Link from "next/link";
import BankingServices from "../components/navbar/BankingServices";
import { FaLock, FaPhone, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import MenuButton from "../components/navbar/MenuButton";

const Navbar = () => {
  const toggle = () => {
    if (window.innerwidth < 765) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    function showOnLarge() {
      if (window.innerWidth > 765) {
        setOpen(true);
      }
    }
    window.addEventListener("resize", showOnLarge);

    return () => {
      window.removeEventListener("resize", showOnLarge);
    };
  }, []);

  const [open, setOpen] = useState(false);

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
          <Link className="p-3 font-extrabold text-2xl md:text-4xl" href="#">
            MINIBANK
          </Link>
          <div className="flex items-right gap-5 mr-10 text-lg">
            <Link href="#">
              <FaLock className="ml-3" />
              <p>LogIn</p>
            </Link>
            <Link href="#">
              <FaPhone className="ml-3" />
              <p>Contact</p>
            </Link>
            <div>
              <Link href="#" onClick={toggle}>
                <FaBars className="ml-3" />
                <p>Menu</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <Interacts />
        </div>
      </div>
      <div>
        <BankingServices />
      </div>
      {open && <MenuButton />}
    </nav>
  );
};

export default Navbar;
