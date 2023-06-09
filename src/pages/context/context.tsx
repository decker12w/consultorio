import { createContext, useContext, useState, ReactNode } from 'react';

type ContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const StateContext = createContext({} as ContextType);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [open, setOpen] = useState(false);

  const contextValue: ContextType = {
    open,
    setOpen,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </ StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext)