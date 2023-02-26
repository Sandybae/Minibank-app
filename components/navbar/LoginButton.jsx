import { FaLock } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const LoginButton = () => {

    const toggle = () => {
        setOpen(!open);
      }
  const [open, setOpen] = useState(false);

return ( 
    <div>
        <Link href="#"onClick={toggle}>
          <FaLock className="ml-3" />
          <p>LogIn</p>
        </Link>
        {open && 
        <div>
            <div className='text-gray-900 text-lg'>
                <FaLock/>
                <p>Login to Internet Banking</p>
            </div>
            <div>
                <p className='text-gray-900 text-lg'>Internet Banking</p>
                <button className='bg-violet-800 text-white text-lg'>Omni Lite</button>
                <button className='bg-violet-800 text-white text-lg'>Omni Plus</button>
            </div>
            <div>
                <p className='text-gray-900 text-lg'>Login</p>
                <button className='bg-violet-800 text-white text-lg'>CashXpress</button>
            </div>
        </div>
        }
    </div>
     );
}
 
export default LoginButton;