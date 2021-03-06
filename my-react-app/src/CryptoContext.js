import React, { useContext } from 'react'
import { createContext,useState,useEffect } from 'react'

const Crypto=createContext();

const CryptoContext = ({children}) => {

    const [currency,setCurrency]=useState("INR");
    const [symbol,setSymbol]=useState("");


    useEffect(() => {if(currency==="INR"){
        setSymbol("Rs.")}
        else if (currency==="USD"){
            setSymbol("$")}

    },[currency])

  return (
   <Crypto.Provider value={{currency,symbol,setCurrency,setSymbol}}>
       {children}
   </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState=()=>{
   return useContext(Crypto);
}