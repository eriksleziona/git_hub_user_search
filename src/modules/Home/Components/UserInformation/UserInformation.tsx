import { FC } from "react";
import "./UserInformation.scss";
const UserInformation: FC = () => {
  // #TODO : Adding the Dynamic data from the API Call.

  return (
    <div className="user-information-container">
      <div className="user-information-container__avatar">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F5%2FUser-Avatar-PNG-Free-Download.png&f=1&nofb=1&ipt=ebcc50a14671f6d6d8567d3399687f0698782d284662bea013135c6fcc8376ee&ipo=images"
          alt="user_avatar"
        />
      </div>
      <div className="user-information-container__information">
        <div className="user-information-container__information-base">
          <h2>The Octocat</h2>
          <p> Joined January 25 2011</p>
        </div>
        <div className="user-information-container__bio">
          <p className="user-information-container__bio-username">@octocat</p>
          <p className="user-information-container__bio-text">
            This profile has no bio
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserInformation;
