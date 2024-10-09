import { createContext, useState } from "react";
export const UrheilijaContext = createContext();


export const UrheilijaProvider = ({ children }) => {
  const [urheilijat, setUrheilijat] = useState([]);

  return (
    <UrheilijaContext.Provider value={{ urheilijat, setUrheilijat }}>
      {children}
    </UrheilijaContext.Provider>
  );
};
