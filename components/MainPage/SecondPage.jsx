import { FaCheck } from "react-icons/fa";

const SecondPage = () => {
    return ( 
        <div className="items-center md:flex md:justify-around text-center  hover:bg-cyan-700 p-5">
            <div className="items-center md:w-1/2 md:text-left md:pl-20">
                <p className="text-4xl text-gray-400 my-5">Classic Current Account</p>
                <p className="p-3 sm:text-left font-bold text-4xl my-10 md:w-3/5">Keep track of your finances 
                with 24/7 access to your money, 
                including electronic banking</p>
                <button className="bg-cyan-900 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">APPLY NOW</button>
                <button className="bg-cyan-900 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
            </div>
            <div className="items-center md:w-1/2 py-10 pl-20">
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5"><FaCheck className="mr-5 text-blue-300"/>Debit Card</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5"><FaCheck className="mr-5 text-blue-300"/>Internet Banking</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5"><FaCheck className="mr-5 text-blue-300"/>Mobile Banking</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 md:w-2/5"><FaCheck className="mr-5 text-blue-300"/>Standing Orders</div>
            </div>
        </div>
     );
}
 
export default SecondPage;