import { FaAngleDown } from 'react-icons/fa';

const FirstPage = () => {
    return ( 
        <div className="m-20">
            <div className="flex justify-around mt-10">
                <div>
                <p className="text-4xl m-4">Current Accounts</p>
                <p className="text-4xl m-4 text-gray-500">Manage your cash</p>
                </div>
                <div><p className="text-xl m-4">A range of accounts designed to help you manage your finances, and make life easier.</p></div>
            </div>
                <div className="flex justify-start gap-10 px-10 py-5 m-10 text-lg border-y border-gray-300">
                    <p>Show accounts with</p>
                    <button className="flex gap-6 text-center justify-center bg-gray-200 p-3">Select One <FaAngleDown/></button>
                </div>
        </div>
     );
}
 
export default FirstPage;