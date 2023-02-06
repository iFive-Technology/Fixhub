import React from "react";
import './OrderTable.css'
import {table} from './TableData'
import img from '../../../../Components/Assets/images/flot.png'

const OdersTabl = () => {
  return (
    <>
      <div>
        <div className=" w-full rounded flex justify-center p-3">
          <div class="card-body rounded overflow-hidden ">
            <div class="table-responsive table-card bg-white ">
              <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead class="text-muted table-light">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Fault</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Imei</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody >
                    {table.map( TableItem => (
                        <>
                         <tr key={TableItem.id}>
                    <td>
                      <a
                        href="apps-ecommerce-order-details.html"
                        class="no-underline  "
                        style={{color: '#4682B4'}}
                      >
                      <span className="font-medium">{TableItem.id}</span> 
                      </a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0  rounded-xl w-7 h-7"  style={{ 
    backgroundImage: `url("https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  
   
    }}>

                        </div>
                        <div class="flex-grow-1 ml-2">{TableItem.name}</div>
                      </div>
                    </td>
                    <td>{TableItem.brand}</td>
                    <td>
                      <span >{TableItem.model}</span>
                    </td>
                    <td>{TableItem.issue}</td>
                    <td className={TableItem.status}>{TableItem.amount}</td>
                    <td>{TableItem.imei}</td>
                    <td>
                      <span className={`px-2 text-sm rounded  ${TableItem.status}` }>
                       {TableItem.status}
                      </span>
                    </td>
                    <td className="flex gap-2">
                    <button className="h-7 w-15 text-white rounded px-2 bg-green-400">Accept</button>
                    <button className="h-7 w-15 text-white rounded px-2 bg-red-400">Decline</button>
                    </td>

                  </tr>
                        </>
                    ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OdersTabl;
