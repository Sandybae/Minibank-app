import Link from 'react';
import { FaCheckCircle } from 'react-icons';
const ApplyNow = () => {
    return ( 
        <div>
            <div>
                <h1>MINIBANK</h1>
                <div>
                    <Link>Current account</Link>
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
                    <Link>Savings account</Link>
                </div>
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default ApplyNow;