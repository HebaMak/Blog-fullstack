import { createContext , useReducer , useEffect } from "react";
import Reducer  from "./Reducer";

const INTIAL_STATE= {
  user:  JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false
}

export const Context = createContext(INTIAL_STATE)

const ContextProvider = ({children}) => {

  const [state , dispatch] = useReducer(Reducer , INTIAL_STATE)
  
  useEffect(()=> {
    localStorage.setItem('user' , JSON.stringify(state.user))

  },[state.user])

  const value = {
    user: state.user , 
    isFetching: state.isFetching,
    error: state.error,
    dispatch
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider