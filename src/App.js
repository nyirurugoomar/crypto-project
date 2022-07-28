import React, { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routers/Home";
import Signin from "./routers/Signin";
import Signup from "./routers/Signup";
import Account from "./routers/Account"
import axios from 'axios' 
 
function App() {

  const [coins,setCoins]= useState([])

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(()=>{
    axios.get(url).then((response)=>{
       setCoins(response.data)
      //  console.log(response.data) you can also excute in coinsersch.jsx it's the same
    })
  },[url])

  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
         <Route path='/' element ={<Home coins={coins} />} />
         <Route path='/signin' element ={<Signin />} />
         <Route path='/signup' element ={<Signup />} />
         <Route path='/account' element ={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
