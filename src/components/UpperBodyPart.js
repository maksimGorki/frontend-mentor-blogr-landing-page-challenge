import React from "react";

import mobileEditorImage from "../projectFiles/images/illustration-editor-mobile.svg";

const UpperBodyPart = () => {
  return (
    <div className="upperBodyPart">
      <div className="bodyHeaderTitle">Designed for the future</div>
      <div className="mobileEditorImage">
        <img src={mobileEditorImage} alt="mobileEditorImage" />
      </div>
      <div className="gridContainer">
        <div className="paragraphContainer">
          <div className="paragraphTitle">Introducing an extensible editor</div>
          <div className="paragraphDescription">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </div>
          <div className="paragraphTitle">Robust content management</div>
          <div className="paragraphDescription">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality, you
            are in full control.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBodyPart;
