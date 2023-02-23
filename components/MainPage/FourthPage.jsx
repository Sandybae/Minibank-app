import { FaCheck } from "react-icons/fa";

const FourthPage = () => {
    return ( 
        <div className="flex justify-around text-center  hover:bg-green-700 hover:text-white">
            <div className="w-1/2 text-left pl-20">
                <p className="text-4xl text-gray-700 my-5">Advantage Current Account</p>
                <p className="font-bold text-4xl my-10 w-3/5">Get ahead with investments, insurance and a salary advance added to your banking</p>
                <button className="bg-green-900 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">APPLY NOW</button>
                <button className="bg-green-900 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
            </div>
            <div className="w-1/2 py-10 pl-20">
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Debit Card</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Internet Banking</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Mobile Banking</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Standing Orders</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Credit Card</div>
                <div className="flex text-xl mx-5 py-5 border-b border-gray-400 w-2/5"><FaCheck className="mr-5 text-blue-300"/>Advance Facility</div>
            </div>
        </div>
     );
}
 
export default FourthPage;