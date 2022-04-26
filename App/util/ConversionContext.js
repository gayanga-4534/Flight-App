import React, { createContext, useState } from 'react';
export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {

    const [selectedValue, setSelectedValue] = useState();

    const [adults,setAdult]=useState("0");
    const [childrens,setChildrens]=useState("0");
    const [x,setX]=useState("0");

    const [airPort,setAirPort]= useState();
    const [toAirPort,setToAirPort] = useState();


  const contextValue = {
    adults,
    airPort,
    toAirPort,
    setAdult,childrens,setChildrens,x,setX,
    setAirPort,
    setToAirPort,





 selectedValue,
 setSelectedValue,
  };


 
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};