import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

const FirstFooter = () => {
    return ( 
        <div className="grid bg-cyan-900 text-base text-green-100 px-20 py-10">
            <h1 className="py-5">Ecobank Banking</h1>
            <div className="grid grid-cols-2">
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Consumer Banking</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Group Banking</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Coperate and Investment Banking</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Commercial Banking</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Security</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Help Center</Link></div>
                <div className="flex px-15 py-2"><FaCaretRight className="mt-1"/><Link href="#">Contact Us</Link></div>
            </div>
        </div>
     );
}
 
export default FirstFooter;