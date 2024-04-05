import { FC } from "react";
import moon from "../../../../assets/moon.svg";
import "./Title.scss";
const Title: FC = () => {
  return (
    <div className="title-container">
      <h1 className="title-container__text">devfinder</h1>
      <div className="title-container__mode">
        <p className="title-container__mode-text">DARK</p>
        <img src={moon} alt="" className="title-container__mode-icon" />
      </div>
    </div>
  );
};
export default Title;
