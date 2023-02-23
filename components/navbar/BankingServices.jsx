import Link from "next/link";
import { FaHome, FaAngleDown } from "react-icons/fa";


const BankingServices = () => {

  const servicesAvailable = [
      {name: 'Everyday Banking', icon: FaAngleDown },
      {name: 'Payments and Transfers', icon: FaAngleDown },
      {name: 'Ways To Bank', icon: FaAngleDown },
      {name: 'Product and Services', icon: FaAngleDown },
      {name: 'Help and Security', icon: FaAngleDown }
  ]
  return ( 
        <div className="flex gap-20 items-center bg-blue-800 text-white p-2 text-base">
          <Link  href="/" className="px-10  hover:bg-white hover:text-blue-800 p-3"><FaHome/></Link>
          { servicesAvailable.map(list => {
            return (
                <button key={list.name} className="hover:bg-white hover:text-blue-800 p-3">{ list.name} { list.icon }</button>
            )
          })
          }
        </div>
     );
}
 
export default BankingServices;