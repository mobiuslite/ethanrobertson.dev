import "./App.css";
import "./custom.scss";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Route, Link, Navigate, Routes } from "react-router-dom";
import React, { lazy, Suspense, useState, useEffect } from "react";

const Home = lazy(() => import("./Pages/Home"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Games = lazy(() => import("./Pages/Games"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));

const renderLoader = () => <div className="contentPage"></div>;

function App() {
  const [title, setTitle] = useState("dev");
  const [changedTitle, setChangedTitle] = useState(false);
  const [showedFunnyJoke, setShowedFunnyJoke] = useState(false);

  const [titleStyle, setTitleStyle] = useState({});
  const [navStyle, setNavStyle] = useState({});
  const [navJustify, setNavJustify] = useState("");

  const navItemPadding = {
    paddingLeft: 20,
    paddingRight: 20,
    textDecoration: "none"
  };

  const linkItemStyle = {
    paddingRight: "1%",
    paddingLeft: "1%",
  };

  useEffect(() => {
    
    if (window.innerWidth < 1188){ 
      //Is mobile
      setTitleStyle({ paddingTop: 20,  textAlign: "center" });
      setNavStyle({justifyContent: "center", alignContent: "center", textAlign: "center"});
      setNavJustify("center");
    }else{
      //Not mobile
      setTitleStyle({ padding: 30, width: "33%", textAlign: "left", display: "inline-block" });
      setNavStyle({justifyContent: "right", width: "66%", alignContent: "right", display: "inline-block" });
      setNavJustify("right");
    }
  }, []);

  const typing = (event) => {

    setChangedTitle(true);

    let newTitle = title;
    if (event.key === "<" || event.key === ">") {
      return;
    }

    //Stops from ctrl, enter, and alt showing up on the title
    if (!event.altKey && !event.ctrlKey && event.key !== "Enter") {

      //removes a character when pressing backspace
      if (event.key === "Backspace" && title.length > 0) {
        newTitle = title.substring(0, title.length - 1);
        setTitle(newTitle);
      }

      else if (event.key !== "Backspace") {

        //Stops the shift key from appearing on the title
        if ((event.shiftKey && event.key !== "Shift") || !event.shiftKey) {
          newTitle = title + event.key;

          //If the client sets the title back to "dev", show a little thank you note
          if (newTitle === "dev" && changedTitle && !showedFunnyJoke) {
            setTitle("thx4PuttingTheTitleBack :)");
            setShowedFunnyJoke(true);
          } else {
            setTitle(newTitle);
          }
        }
      }
    }
  }

  return (
    <div className="App" style={{ fontFamily: "Share Tech Mono", width: "100%" }} onKeyDown={typing} tabIndex="0">
      <div style={{ backgroundColor: "#10101c", zIndex: 3 }}>
        <div>

          <div style={titleStyle}>
            <h1 style={{ color: "white" }}>ethanrobertson<span style={{ color: "#2d96ce" }}>.
            </span>
              {title}
              <span>
                <Image
                  src="images/consoleCursor.gif"
                  style={{ height: 30, width: 30 }}
                />
              </span>
            </h1>
            <div style={{ paddingBottom: "35px" }}>
              <div>
                <a
                  href="https://github.com/mobiuslite/"
                  target="_blank"
                  rel="noreferrer"
                  style={linkItemStyle}
                >
                  <img
                    src="GitHub-Mark-Light-32px.png"
                    alt="Github logo"
                    width="32"
                    height="32"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ethan-robertson/"
                  target="_blank"
                  rel="noreferrer"
                  style={linkItemStyle}
                >
                  <img src="LI-In-Bug.png" alt="linkedin logo" width="32" height="32" />
                </a>
                <a
                  href="https://steamcommunity.com/id/MobiusLite/"
                  target="_blank"
                  rel="noreferrer"
                  style={linkItemStyle}
                >
                  <img src="Steam Icon.png" alt="Steam logo" width="32" height="32" />
                </a>
              </div>
            </div>
          </div>

          <div style={navStyle}>
            <Navbar
              style={{ backgroundColor: "#10101c", justifyContent: "center"}}
              expand="lg"
              variant="dark"
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  style={{
                    width: "100%",
                    justifyContent: navJustify,
                  }}
                >
                  <Nav.Link
                    as={Link}
                    href="#home"
                    to="/home"
                    style={navItemPadding}
                  >
                    <h2 className="customNavItem">Home</h2>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="#aboutme"
                    to="/aboutme"
                    style={navItemPadding}
                  >
                    <h2 className="customNavItem">About Me</h2>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="#games"
                    to="/games"
                    style={navItemPadding}
                  >
                    <h2 className="customNavItem">Games</h2>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="#portfolio"
                    to="/portfolio"
                    style={navItemPadding}
                  >
                    <h2 className="customNavItem">Portfolio</h2>
                  </Nav.Link>
                  <a
                    href="https://drive.google.com/file/d/1XB5VVQbp2e1MpGmScWxCf8EzgmFA2LnE/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    style={Object.assign(navItemPadding, { paddingTop: 8, paddingBottom: 8 })}
                  >
                    <h2 className="customNavItem">Resume/Contact</h2>
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          paddingTop: 50
        }}
        className="gradientPage"
      >
        <Suspense fallback={renderLoader()} style={{}}>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/games" element={<Games />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
