import { FaCheck } from "react-icons/fa";

const FourthPage = () => {
    return ( 
        <div className="flex justify-around text-center  hover:bg-lime-200 hover:text-white">
                <div className="w-1/2 hover:bg-lime-200 text-left pl-20">
                <p className="text-4xl text-green-400 my-5">Advantage Current Account</p>
                <p className="font-bold text-4xl my-10">Get ahead with investments, insurance and a salary advance added to your banking</p>
                <button className="bg-green-900 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">APPLY NOW</button>
                <button className="bg-green-900 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
            </div>
            <div className="w-1/2 py-10 pl-20 hover:bg-lime-200">
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Debit Card</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Internet Banking</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Mobile Banking</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Standing Orders</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Credit Card</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-400"/>Advance Facility</div>
            </div>
        </div>
     );
}
 
export default FourthPage;