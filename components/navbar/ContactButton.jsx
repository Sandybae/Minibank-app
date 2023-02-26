import { FaPhone } from 'react-icons/fa';

const ContactButton = () => {
    return ( 
        <div>
            <div>
                <FaPhone/>
                <p>Contact</p>
            </div>
            <div>
                <button>Get in Touch</button>
                <button>Find a service</button>
            </div>
        </div>
     );
}
 
export default ContactButton;