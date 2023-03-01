import React, { useEffect, useState } from "react";
import './OrderTable.css'
// import {table} from './TableData'
import { collectionGroup, getDocs, } from "firebase/firestore";
import { db } from "../../../../Pages/Auth/Firebase";  
const OdersTabl = () => {
  const [first, setFirst] = useState([]);
  

 useEffect(() => {
  const GetUsersSubcollections = async () =>{

    const subcollectionQuery = collectionGroup(db,'oders');
    const subcollectionSnapshot = await getDocs(subcollectionQuery);

  subcollectionSnapshot.forEach(doc =>{
     let hi =  doc.data()
//  console.log(hi);
setFirst(prev => ([...prev, hi]))
    })
// console.log(subcollectionSnapshot);
  }
     GetUsersSubcollections()
 }, [])

  return (
    <>
      <div className="pb-10">
        <div className=" w-full rounded flex justify-center p-3">
          <div className="card-body rounded overflow-hidden ">
            <div className="table-responsive table-card bg-white ">
              <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted table-light">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Fault</th>
                    <th scope="col">Imei</th>
                    <th scope="col">Country</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody >
                {
                  first.map( item => (
                    <>
                    <tr>
                      <td>{item.OdersID}</td>
                      <td>{item.fullname}</td>
                      <td>{item.Brand}</td>
                      <td>{item.Model}</td>
                      <td>{item.fault}</td>
                      <td>{item.Imei}</td>
                      <td>{item.Country}</td>
                      <td>{item.City}</td>
                      <td>{item.Address}</td>
                    </tr>
                    </>
                  ))
                }
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
