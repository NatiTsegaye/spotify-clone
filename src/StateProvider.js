import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initial, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initial)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
