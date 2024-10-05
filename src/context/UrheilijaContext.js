import { createContext, useState } from "react";
export const UrheilijaContext = createContext();


export const UrheilijaProvider = ({ children }) => {
  const [urheilija, setUrheilija] = useState([]);

  return (
    <UrheilijaContext.Provider value={{ urheilija, setUrheilija }}>
      {children}
    </UrheilijaContext.Provider>
  );
};
