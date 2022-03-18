import React, { useState, useContext } from "react";

const DrinkContext = React.createContext();
const UpdateDrinkContext = React.createContext();

export const useDrink = () => {
  return useContext(DrinkContext);
};

export const useUpdateDrink = () => {
  return useContext(UpdateDrinkContext);
};


export const DrinkProvider = ({ value, children }) => {
  const [drink, setDrink] = useState(value);
  return (
    <DrinkContext.Provider value={drink}>
      <UpdateDrinkContext.Provider value={setDrink}>
        {children}
      </UpdateDrinkContext.Provider>
    </DrinkContext.Provider>
  )
};
