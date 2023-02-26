import MenuButton from "./MenuButton";
import ContactButton from "./ContactButton";
import Link from "next/link";
import { FaLock, FaPhone, FaBars} from 'react-icons/fa';
import { useState } from "react";

const SmallScreen = () => {

    const toggle = () => {
          setOpen(!open);
        }
    const [open, setOpen] = useState(false);
    return ( 
      <div className="flex items-right gap-5 mr-10 text-lg">
        <Link href="#">
          <FaLock className="ml-3" />
          <p>LogIn</p>
        </Link>
        <Link href="#" onClick={toggle}>
          <FaPhone className="ml-3" />
          <p>Contact</p>
        </Link>
        <div>
          <Link href="#" onClick={toggle}>
            <FaBars className="ml-3" />
            <p>Menu</p>
          </Link>
        </div>
        {open && <MenuButton />}
        {open && <ContactButton />}
      </div>
     );
}
 
export default SmallScreen;