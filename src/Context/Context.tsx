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

/*const getUser = async (userName: string = "octocat") => {
    #TODO : Implement the API call to the Github api to get the user. 
    Default value has to be set to octocat and triggerer by clicking search bnt.
};*/

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ isDark, setIsDark, userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType | null => {
  return useContext(AppContext);
};
