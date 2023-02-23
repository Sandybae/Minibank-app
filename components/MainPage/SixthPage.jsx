import { FaCheck } from "react-icons/fa";

const SixthPage = () => {

    return ( 
       <div className="items-left md:flex justify-around text-center p-5 hover:bg-slate-500">
          <div className="items-left md:w-1/2 text-left md:pl-20">
            <p className="text-4xl text-gray-900 my-5">Diaspora Current Account</p>
            <p className="text-left font-bold text-4xl my-10 md:w-3/5">Manage and move your money more easily while living and working away from home</p>
            <button className="bg-gray-700 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">APPLY NOW</button>
            <button className="bg-gray-700 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
          </div>
          <div className="items-left md:w-1/2 py-10 md:pl-20">
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>Debit Card</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>Internet Banking</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>Mobile Banking</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>Standing Orders</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>Relationship Manager</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5"><FaCheck className="mr-5 text-blue-300"/>International transfers</div>
             <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-3/5 text-start"><FaCheck className="mr-5 text-blue-300"/>Access to your money in 33 countries</div>
          </div>
       </div>
   );
}
 
export default SixthPage;