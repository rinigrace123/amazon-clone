//setup data layer
//keep track of user
//login 
import React , { createContext, useContext, useReducer } from  "react";
//track basket
//This is data layer
export const StateContext = createContext();
//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
   <StateContext.Provider  value ={useReducer(reducer, initialState)}>
      {children}
   </StateContext.Provider>
);
//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);