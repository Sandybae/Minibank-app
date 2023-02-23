import Link from "next/link";
import { FaTelegramPlane, FaFacebookF, FaTwitter, FaArrowCircleUp } from "react-icons/fa";

const LastPage = () => {
    return ( 
        <div className="flex justify-between m-10 text-gray-400 text-xl">
            <div className="flex gap-4 items-center">
                <Link href="#">Share</Link>
                <a href="https://telegram.com"><FaTelegramPlane/></a>
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://twitter.com"><FaTwitter/></a>
            </div>
            <div className="flex gap-4 items-center">
                <a href="#"><FaArrowCircleUp/></a>
                <p>Back to the top</p>
            </div>
        </div>
     );
}
 
export default LastPage;