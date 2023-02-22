import Link from "next/link";
import { FaTelegramPlane, FaFacebookF, FaTwitter, FaArrowCircleUp } from "react-icons/fa";

const LastPage = () => {
    return ( 
        <div className="flex justify-between m-10 text-gray-400 text-xl">
            <div className="flex gap-4">
                <Link href="#">Share</Link>
                <a href="https://telegram.com" className="mt-2"><FaTelegramPlane/></a>
                <a href="https://facebook.com" className="mt-2"><FaFacebookF/></a>
                <a href="https://twitter.com" className="mt-2"><FaTwitter/></a>
            </div>
            <div className="flex gap-4">
                <a href="#" className="mt-2"><FaArrowCircleUp/></a>
                <p>Back to the top</p>
            </div>
        </div>
     );
}
 
export default LastPage;