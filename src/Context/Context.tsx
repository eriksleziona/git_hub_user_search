// #TODO: Setting up the whole  React Context
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { AppContextType } from "./Context.types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType | null => {
  return useContext(AppContext);
};
