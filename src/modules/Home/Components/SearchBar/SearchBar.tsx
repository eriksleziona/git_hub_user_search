import { FC } from "react";
import "./SearchBar.scss";
import { useGlobalContext } from "../../../../Context/Context";
import { AppContextType } from "../../../../Context/Context.types";
const SearchBar: FC = () => {
  const { setUserName } = useGlobalContext() as AppContextType;

  const saveInput = (name: string): void => {
    setUserName(name);
  };

  return (
    <div className="searchbar-container">
      <img src="" alt="" className="searchbar-container__icon" />
      <input
        type="search"
        className="searchbar-container__input"
        placeholder="Search GitHub username…"
        onChange={(e) => saveInput(e.target.value)}
      />
      <div className="searchbar-container__error"></div>
      <button className="searchbar-container__bnt"> Search</button>
    </div>
  );
};
export default SearchBar;
