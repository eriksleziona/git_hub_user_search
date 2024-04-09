import { FC } from "react";
import { IoMoonSharp } from "react-icons/io5";
import "./Title.scss";
const Title: FC = () => {
  return (
    <div className="title-container">
      <h1 className="title-container__text">devfinder</h1>
      <div className="title-container__mode">
        <p className="title-container__mode-text">DARK</p>
        <IoMoonSharp className="title-container__mode-icon" />
      </div>
    </div>
  );
};
export default Title;
