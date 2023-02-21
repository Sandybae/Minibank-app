import Link from "next/link";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-around p-2 text-s text-white bg-blue-400">
        <div>
          <Link className="ml-4 p-2" href="#">
            Consumer Banking
          </Link>
          <Link className="ml-4 p-2" href="#">
            Commercial Banking
          </Link>
          <Link className="ml-4 p-2" href="#">
            Coperate and Investment Banking
          </Link>
          <Link className="ml-4 p-2" href="#">
            Group
          </Link>
        </div>
        <div className="flex justify-between">
          <span className="ml-8">Follow us</span>
          <Link className="ml-4" href="#">
            <FaYoutube />
          </Link>
          <Link className="ml-4" href="#">
            <FaFacebookF />
          </Link>
          <Link className="ml-4" href="#">
            <FaTwitter />
          </Link>
          <Link className="ml-4" href="#">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className="flex justify-around bg-blue-800 p-8 text-white border-b border-gray-500">
        <div>
          <Link className="font-extrabold text-4xl" href="#">
            MINIBANK
          </Link>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-around mx-8">
            <p className="mr-4">Search</p>
          </div>
          <div className="flex justify-around mx-8">
            <p className="mr-4">Contact Us</p>
          </div>
          <div className="flex justify-around mx-8">
            <p className="mr-4">LogIn</p>
          </div>
        </div>
      </div>

      <div className="flex justify-around bg-blue-800 text-white p-4">
        <div>
          <Link href="/"></Link>
        </div>
        <div className="flex justify-between">
          <p className="mr-2">Everyday Banking</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-2">Payments and Transfers</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-2">Ways To Bank</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-2">Product and Services</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-2">Help and Security</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
