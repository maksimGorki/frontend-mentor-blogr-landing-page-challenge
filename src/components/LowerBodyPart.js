import React from "react";

import mobileLaptopImage from "../projectFiles/images/illustration-laptop-mobile.svg";

const LowerBodyPart = () => {
  return (
    <div className="lowerBodyPart">
      <div className="mobileLaptopImage">
        <img src={mobileLaptopImage} alt="mobileLaptopImage" />
      </div>
      <div className="gridContainer">
        <div className="lowerParagraphContainer">
          <div className="lowerParagraphTitle">Free, open, simple</div>
          <div className="lowerParagraphDescription">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to learn
          </div>
          <div className="lowerParagraphTitle">Powerful tooling</div>
          <div className="lowerParagraphDescription">
            Batteries included. We built simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerBodyPart;
