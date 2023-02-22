import Link from "next/link";

const FirstFooter = () => {
    return ( 
        <div>
            <h1>Ecobank Banking</h1>
            <div className="grid ">
            <Link href="#">Consumer Banking</Link>
            <Link href="#">Group Banking</Link>
            <Link href="#">Coperate and Investment Banking</Link>
            <Link href="#">Commercial Banking</Link>
            <Link href="#">Security</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Contact Us</Link>
            </div>
        </div>
     );
}
 
export default FirstFooter;