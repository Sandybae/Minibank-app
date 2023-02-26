import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const ContactButton = () => {

    const toggle = () => {
        setOpen(!open);
      }
  const [open, setOpen] = useState(false);
    return ( 
        <div>
            <div>
                <Link href="#" onClick={toggle}>
                <FaPhone className="ml-3" />
                <p>Contact</p>
                </Link>
            </div>
            <div>
                {open && 
                <div>
                    <div className='flex justify-start text-gray-900 m-3'>
                         <FaPhone/>
                         <p>Contact</p> 
                    </div>
                    <div>
                    <button className='bg-violet-800 text-white border-b border-black m-3 p-4'>Get in Touch</button>
                    <button className='bg-violet-800 text-white border-b border-black m-3 p-4'>Find a service</button>
                    </div>
                </div>
                }
            </div>
        </div>
     );
}
 
export default ContactButton;