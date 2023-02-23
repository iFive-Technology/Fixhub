// import {useCollectionData} from 'react-firebase-hooks/firestore'
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../Pages/Auth/Firebase";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = async () =>{

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {

//     //   setId(doc.id)
//   console.log(doc.id, " => ", doc.data());

// const User = getAuth();
// console.log(User);
// const userId = doc.id


});
querySnapshot.map((userId) =>{
    console.log(userId);
})
getDocs(collection(db, `users/${userId}`, 'oders')).forEach((doc1) => {

    console.log(doc1.id, " => ", doc1.data());
  });



}

user();


export const table =[
    {
    id : '#ZA3245',
    name : 'Chidera',
    brand : 'Apple',
    model : 'iPhone 11 Pro Max',
    issue : 'Boken Screen',
    imei : '35848820982840',
    amount: ' ₦30,000',
    status : 'paid'
    
    },
    {
    id : '#DC6473',
    name : 'Alex Buchi',
    brand : 'Apple',
    model : 'iPhone 12 Pro Max',
    issue : 'Not Charging',
    imei : '358488203789840',
    amount: ' ₦10,000',
    status : 'pending'
    
    },
    {
    id : '#DF7584',
    name : 'Oshamo feyishola',
    brand : 'Samsung',
    model : 'Samsung Galaxy A53 5G',
    issue : 'Boken touchPad',
    imei : '35548820982870',
    amount: ' ₦35,000',
    status : 'unpaid'
    
    },
    {
    id : '#GH7456',
    name : 'Tom vendark',
    brand : 'Tecno',
    model : 'Pova Neo 2.',
    issue : 'Water Damage',
    imei : '345364653990840',
    amount: ' ₦25,000',
    status : 'paid'
    
    },
]