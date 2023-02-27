import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';


const ApplyNow = () => {
    return ( 
        <div className='bg-url()'>
            <div>
                <h1>MINIBANK</h1>
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