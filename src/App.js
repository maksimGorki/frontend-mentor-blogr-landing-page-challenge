import "./App.css";
import { useState, useRef, useEffect } from "react";

import { ReactComponent as Logo } from "./projectFiles/images/logo.svg";
import { ReactComponent as ArrowLight } from "./projectFiles/images/icon-arrow-light.svg";
import { ReactComponent as ArrowDark } from "./projectFiles/images/icon-arrow-dark.svg";
import { ReactComponent as MobileEditor } from "./projectFiles/images/illustration-editor-mobile.svg";
import mobileEditorImage from "./projectFiles/images/illustration-editor-mobile.svg";
import { ReactComponent as MobileLaptop } from "./projectFiles/images/illustration-laptop-mobile.svg";
import mobileLaptopImage from "./projectFiles/images/illustration-laptop-mobile.svg";
import { ReactComponent as Phones } from "./projectFiles/images/illustration-phones.svg";
import phonesImage from "./projectFiles/images/illustration-phones.svg";
import { ReactComponent as Hamburger } from "./projectFiles/images/icon-hamburger.svg";
import { ReactComponent as Close } from "./projectFiles/images/icon-close.svg";

function App() {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showConnectMenu, setShowConnectMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.currentTarget)) {
        if (event.target.id === "product") {
          setShowCompanyMenu(false);
          setShowConnectMenu(false);
        } else if (event.target.id === "company") {
          setShowProductMenu(false);
          setShowConnectMenu(false);
        } else if (event.target.id === "connect") {
          setShowProductMenu(false);
          setShowCompanyMenu(false);
        } else {
          setShowProductMenu(false);
          setShowCompanyMenu(false);
          setShowConnectMenu(false);
        }
      }
      console.log(event.target.id);
    };
    document.addEventListener("mouseup", handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      console.log("remove event listener");
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="wrapper">
      <div className="header">
        <Logo className="logo" />
        {showMobileMenu ? (
          <Close
            className="hamburger"
            onClick={() => setShowMobileMenu(false)}
          />
        ) : (
          <Hamburger
            className="hamburger"
            onClick={() => setShowMobileMenu(true)}
          />
        )}
        {showMobileMenu && (
          <div className="mobileMenu">
            <div className="mobileMenuContainer">
              <div className="topMenuItem">
                <div
                  className="topMenuHeader"
                  id="product"
                  onClick={() => setShowProductMenu(!showProductMenu)}
                  ref={ref}
                >
                  Product
                  <ArrowDark
                    className={`${showProductMenu ? "openMenu" : "closeMenu"}`}
                  />
                </div>
                {showProductMenu && (
                  <div className="mobileAltMenu">
                    <div className="mobileAltMenuItem">Overview</div>
                    <div className="mobileAltMenuItem">Pricing</div>
                    <div className="mobileAltMenuItem">Marketplace</div>
                    <div className="mobileAltMenuItem">Features</div>
                    <div className="mobileAltMenuItem">Integrations</div>
                  </div>
                )}
              </div>
              <div className="topMenuItem">
                <div
                  className="topMenuHeader"
                  id="company"
                  onClick={() => setShowCompanyMenu(!showCompanyMenu)}
                  ref={ref}
                >
                  Company
                  <ArrowDark
                    className={`${showCompanyMenu ? "openMenu" : "closeMenu"}`}
                  />
                </div>
                {showCompanyMenu && (
                  <div className="mobileAltMenu">
                    <div className="mobileAltMenuItem">About</div>
                    <div className="mobileAltMenuItem">Team</div>
                    <div className="mobileAltMenuItem">Blog</div>
                    <div className="mobileAltMenuItem">Careers</div>
                  </div>
                )}
              </div>
              <div className="topMenuItem">
                <div
                  className="topMenuHeader"
                  id="connect"
                  onClick={() => setShowConnectMenu(!showConnectMenu)}
                  ref={ref}
                >
                  Connect
                  <ArrowDark
                    className={`${showConnectMenu ? "openMenu" : "closeMenu"}`}
                  />
                </div>
                {showConnectMenu && (
                  <div className="mobileAltMenu">
                    <div className="mobileAltMenuItem">Contact</div>
                    <div className="mobileAltMenuItem">Newsletter</div>
                    <div className="mobileAltMenuItem">LinkedIn</div>
                  </div>
                )}
              </div>
              <div className="horizontalRule"></div>
              <div className="menuLoginBtn">login</div>
              <div className="menuSignUpBtn">sign up</div>
            </div>
          </div>
        )}

        <div className="navBar">
          <div
            className="navBarItem"
            id="product"
            onClick={() => {
              setShowProductMenu(!showProductMenu);
            }}
            ref={ref}
          >
            product
            <ArrowLight
              className={`${showProductMenu ? "openMenu" : "closeMenu"}`}
            />
            {showProductMenu && (
              <div className="dropMenu">
                <div className="dropMenuContainer">
                  <div className="dropMenuItem">Overview</div>
                  <div className="dropMenuItem">Pricing</div>
                  <div className="dropMenuItem">Marketplace</div>
                  <div className="dropMenuItem">Features</div>
                  <div className="dropMenuItem">Integrations</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="navBarItem"
            id="company"
            onClick={() => {
              setShowCompanyMenu(!showCompanyMenu);
            }}
            ref={ref}
          >
            company
            <ArrowLight
              className={`${showCompanyMenu ? "openMenu" : "closeMenu"}`}
            />
            {showCompanyMenu && (
              <div className="dropMenu">
                <div className="dropMenuContainer">
                  <div className="dropMenuItem">About</div>
                  <div className="dropMenuItem">Team</div>
                  <div className="dropMenuItem">Blog</div>
                  <div className="dropMenuItem">Careers</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="navBarItem"
            id="connect"
            onClick={() => {
              setShowConnectMenu(!showConnectMenu);
            }}
            ref={ref}
          >
            connect
            <ArrowLight
              className={`${showConnectMenu ? "openMenu" : "closeMenu"}`}
            />
            {showConnectMenu && (
              <div className="dropMenu">
                <div className="dropMenuContainer">
                  <div className="dropMenuItem">Contact</div>
                  <div className="dropMenuItem">Newsletter</div>
                  <div className="dropMenuItem">LinkedIn</div>
                </div>
              </div>
            )}
          </div>
          <div className="loginBtn">login</div>
          <div className="signUpBtn">sign up</div>
        </div>
        <div className="headerTitle">A modern publishing platform</div>
        <div className="headerCatchword">
          Grow your audience and build your online brand
        </div>
        <div className="headerBtnsContainer">
          <div className="startBtn">Start for Free</div>
          <div className="learnMoreBtn">Learn More</div>
        </div>
      </div>
      <div className="upperBodyPart">
        <div className="bodyHeaderTitle">Designed for the future</div>
        <div className="mobileEditorImage">
          <img src={mobileEditorImage} alt="mobileEditorImage" />
        </div>
        {/* <MobileEditor className="mobileEditorImage" /> */}
        <div className="gridContainer">
          <div className="paragraphContainer">
            <div className="paragraphTitle">
              Introducing an extensible editor
            </div>
            <div className="paragraphDescription">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </div>
            <div className="paragraphTitle">Robust content management</div>
            <div className="paragraphDescription">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you are in full control.
            </div>
          </div>
        </div>
      </div>
      <div className="phonesContainer">
        <div className="leftMargin"></div>
        <div className="phonesImage">
          <img src={phonesImage} alt="phonesImage"></img>
        </div>
        <div className="phonesInfoContainer">
          <div className="phonesInfoTitle">State of the Art Infrastructure</div>
          <div className="phonesInfoParagraph">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </div>
        </div>
      </div>
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
              Analytics. The architecture is clean and is relatively easy to
              learn
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
      <div className="footerContainer">
        <div className="rightSideMargin"></div>
        <Logo />
        <div className="footerColumn">
          <div className="footerColumnTitle">Product</div>
          <div className="footerColumnItem">Overview</div>
          <div className="footerColumnItem">Pricing</div>
          <div className="footerColumnItem">Marketplace</div>
          <div className="footerColumnItem">Features</div>
          <div className="footerColumnItem">Integrations</div>
        </div>
        <div className="footerColumn">
          <div className="footerColumnTitle">Company</div>
          <div className="footerColumnItem">About</div>
          <div className="footerColumnItem">Team</div>
          <div className="footerColumnItem">Blog</div>
          <div className="footerColumnItem">Careers</div>
        </div>
        <div className="footerColumn">
          <div className="footerColumnTitle">Connect</div>
          <div className="footerColumnItem">Contact</div>
          <div className="footerColumnItem">Newsletter</div>
          <div className="footerColumnItem">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default App;
