import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Number() {
  let [token, setToken] = useState("");
  let [windowSize, setWindowSize] = useState(0);
  let { numberId } = useParams();
  let [numbers, setNumbers] = useState([]);
  let [message, setMessage] = useState("");
  let header = { Authorization: `Bearer ${token}`};


  console.log(numberId);

  async function generateToken(userDetail){
    let response = await axios.post("http://20.244.56.144/test/auth", userDetail);
    console.log(response.data.access_token);
    setToken(response.data.access_token);
  }

  useEffect(()=>{
    let Object ={
        "companyName": "GLACompany",
        "clientID": "6f98f509-4a89-40c7-896f-889948d7ad8b",
        "clientSecret": "NkPYzixnnEAisFkU",
        "ownerName": "Aaditya",
        "ownerEmail": "aaditya.saraswat_cs21@gla.ac.in",
        "rollNo": "2115000001"
    }
    generateToken(Object)
  },[])

  async function handleClick() {
    let result = await axios.get(`http://20.244.56.144/test/${numberId}`, {
      headers: header,
    });
    let currentSize = result.data.numbers.length;
    let average = 0;
    let arr = result.data.numbers;
    if(currentSize > windowSize){
        average = calculateAverage(arr);
        setMessage(average);
    }
    else{
        setMessage("Window size is Less than previous");
    }
    setNumbers(result.data.numbers);
    console.log(result.data.numbers);
    console.log(result);

  }

  function calculateAverage(arr){
    let totalNumbers = arr.length;
    let totalSum = 0;
    console.log("Array : " ,arr);
    for(let i =0;i < arr.length;i++){
        totalSum = totalSum + arr[i];
    }
    return totalSum / totalNumbers;
  }

  return (
    <>
    <button onClick={handleClick}>Fetch data</button> 
      <Link to="http://20.244.56.144/test/even">Even Number</Link>
      <Link to="http://20.244.56.144/test/prime" >Prime Number</Link>
      <Link to="http://20.244.56.144/test/fibo">Fibonacci Number</Link>
      <Link to="http://20.244.56.144/test/rand">Random Number</Link>
        
      
    </>
  );
}

export default Number;