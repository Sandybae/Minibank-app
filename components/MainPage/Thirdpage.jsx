import { FaCheck } from "react-icons/fa";

const ThirdPage = () => {
    return ( 
        <div className="flex justify-around text-center  hover:bg-teal-600">
             <div className="w-1/2 hover:bg-teal-600 text-left pl-20">
                <p className="text-4xl text-green-400 my-5">Student Current Account</p>
                <p className="font-bold text-4xl my-10">If you are studying, go direct with easy and free digital banking</p>
                <button className="bg-green-900 text-white text-sm text-bold rounded hover:border hover:border-white p-3 mx-2">APPLY NOW</button>
                <button className="bg-green-900 text-white text-sm rounded text-bold hover:border hover:border-white p-3 mx-2">DOWNLOAD PDF FORM</button>
            </div>
            <div className="w-1/2 py-10 pl-20 hover:bg-teal-700">
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-300"/>Debit Card</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-300"/>Internet Banking</div>
                <div className="flex text-xl mx-5 py-5"><FaCheck className="mr-5 text-blue-300"/>Mobile Banking</div>
                <div className="flex text-xl mx-5 py-5 border-b-white"><FaCheck className="mr-5 text-blue-300"/>Standing Orders</div>
            </div>
        </div>
     );
}
 
export default ThirdPage;