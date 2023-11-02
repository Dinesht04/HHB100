import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
    const [symptomList,setSymptomList] = useState([]);

  return (
    <AppContext.Provider value={{ symptomList, setSymptomList }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
