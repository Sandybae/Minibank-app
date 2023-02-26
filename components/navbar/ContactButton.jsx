import { FaPhone } from 'react-icons/fa';

const ContactButton = () => {
    return ( 
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
     );
}
 
export default ContactButton;