import "./App.css";
import "./custom.scss";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Route, Link, Navigate, Routes } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Pages/Home"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Contact = lazy(() => import("./Pages/Contact"));
const Games = lazy(() => import("./Pages/Games"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));

const renderLoader = () => <p />;

function App() {

  const [title, setTitle] = useState("dev")
  const navItemPadding = {
    paddingLeft: 40,
    paddingRight: 40,
  };

  const linkItemStyle = {
    paddingRight: "1%",
    paddingLeft: "1%",
  };

  const typing = (event) => {

    //Stops from users being able to type using the alt, ctrl, and shift key
    if (!event.altKey && !event.ctrlKey && event.key != "Enter") {

      if (event.key === "Backspace" && title.length > 0) {
        setTitle(title.substring(0, title.length - 1));

      }
      else if (event.key !== "Backspace") {

        if ((event.shiftKey && event.key !== "Shift") || !event.shiftKey) {
          setTitle(title + event.key);
        }
      }
    }
  }

  return (
    <div className="App" style={{ fontFamily: "Share Tech Mono", width: "100%" }} onKeyDown={typing} tabIndex="0">
      <div style={{ backgroundColor: "#10101c", zIndex: 3 }}>
        <div style={{ display: "inline" }}>
          {/*<Image
            src="Logo.png"
            alt="Ethan Robertson Website Logo"
            style={{
              height: "auto",
              width: "50%",
              maxWidth: "700px",
              paddingTop: "50px",
              paddingBottom: "15px",
            }}
          />
          <Image
            src="images/consoleCursor.gif"
            style={{ height: "2%", width: "2%", marginTop: "55px" }}
          />*/}
          <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <h1 style={{ fontSize: 75, color: "white" }}>ethanrobertson<span style={{ color: "#2d96ce" }}>.
            </span>
              {title}
              <span>
                <Image
                  src="images/consoleCursor.gif"
                  style={{ height: "2%", width: "2%" }}
                />
              </span>
            </h1>
          </div>
        </div>
        <div style={{ paddingBottom: "35px" }}>
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
            href="https://steamcommunity.com/id/MobiusLite/"
            target="_blank"
            rel="noreferrer"
            style={linkItemStyle}
          >
            <img src="Steam Icon.png" alt="Steam logo" width="32" height="32" />
          </a>
        </div>
        <Navbar
          style={{ backgroundColor: "#10101c", justifyContent: "center" }}
          expand="lg"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                width: "100%",
                justifyContent: "center",
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
              <Nav.Link
                as={Link}
                href="#contact"
                to="/contact"
                style={navItemPadding}
              >
                <h2 className="customNavItem">Resume/Contact</h2>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
