import { FaCaretRight } from 'react-icons/fa';
import Link from 'next/link';

const MenuButton = () => {
    return ( 
        <div>
            <div className='bg-white text-violet-800 transiton'>
                <div>
                   <Link href="/" className='flex justify-between m-2 p-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                   Home
                   </Link>
                </div>
                <div>
                   <Link href="#" className='flex justify-between p-2 m-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                   Banking Everyday <FaCaretRight />
                   </Link>
                </div>
                <div>
                   <Link href="#" className='flex justify-between p-2 m-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                   Payments & Transfers <FaCaretRight />
                   </Link>
                </div>
                <div>
                <Link href="#" className='flex justify-between p-2 m-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                Ways To Bank <FaCaretRight />
                </Link>
                </div>
                <div>
                <Link href="#" className='flex justify-between p-2 m-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                Products and Services <FaCaretRight />
              </Link>
                </div>
                <div>
                <Link href="#" className='flex justify-between p-2 m-2 text-lg border-b border-gray-300 hover:text-gray-800 hover:pl-4'>
                Help and Security <FaCaretRight />
               </Link>
                </div>
            </div>
        </div>
     );
}
 
export default MenuButton;