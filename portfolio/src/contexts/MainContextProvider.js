import React, { useState, createContext } from 'react';
export const MainContext = createContext();
const MainContextProvider = (props) => {
  const [menuPositionTop, setMenuPositionTop] = useState(true) //context

  return (
    <MainContext.Provider value={{
      menuPositionTop,
      setMenuPositionTop
    }}>
      {props.children}
    </MainContext.Provider>
  );
}
export default MainContextProvider;