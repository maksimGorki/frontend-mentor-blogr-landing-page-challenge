import React from "react";

import phonesImage from "../projectFiles/images/illustration-phones.svg";

const PhonesBodyPart = () => {
  return (
    <div className="phonesContainer">
      <div className="leftMargin"></div>
      <div className="phonesImage">
        <img src={phonesImage} alt="phonesImage"></img>
      </div>
      <div className="phonesInfoContainer">
        <div className="phonesInfoTitle">State of the Art Infrastructure</div>
        <div className="phonesInfoParagraph">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </div>
      </div>
    </div>
  );
};

export default PhonesBodyPart;
