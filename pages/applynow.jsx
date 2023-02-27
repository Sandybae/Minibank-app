import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';


const ApplyNow = () => {
    return ( 
        <div className='bg-[url()]'>
            <div className='dropdown'></div>
            <div className=''>
                <div className='flex justify-between'>
                    <h1>MINIBANK</h1>
                    <div>
                        <p>Having Troubles?</p>
                        <Link href="#">Get Help</Link>
                    </div>
                </div>
                <div>
                    <Link href="#">Current account</Link>
                    <div>
                        <FaCheckCircle/>
                        <p>Debit Card</p>
                    </div>
                    <div>
                    <FaCheckCircle/>
                    <p>Minibank Online</p>
                    </div>
                    <div>
                    <FaCheckCircle/>
                    <p>Mobile Banking</p>
                    </div>
                    <div>
                    <FaCheckCircle/>
                    <p>Standing Orders</p>
                    </div>
                    <Link href="#">Savings account</Link>
                </div>
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default ApplyNow;