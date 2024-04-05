import { FC } from "react";
import "./SearchBar.scss";
const SearchBar: FC = () => {
  return (
    <div className="searchbar-container">
      <img src="" alt="" className="searchbar-container__icon" />
      <input
        type="search"
        className="searchbar-container__input"
        placeholder="Search GitHub username…"
      />
      <div className="searchbar-container__error"></div>
      <button className="searchbar-container__bnt"> Search</button>
    </div>
  );
};
export default SearchBar;
