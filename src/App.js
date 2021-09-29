import "./App.css";
import "./custom.scss";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Route, Link, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Contact = lazy(() => import("./Pages/Contact"));
const renderLoader = () => <p />;

function App() {
  const navItemPadding = {
    paddingLeft: 40,
    paddingRight: 40,
  };

  const linkItemStyle = {
    paddingRight: "1%",
    paddingLeft: "1%",
  };

  return (
    <div className="App" style={{ fontFamily: "Open Sans", width: "100%" }}>
      <div style={{ backgroundColor: "#10101c", zIndex: 3 }}>
        <div style={{ display: "inline" }}>
          <Image
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
          />
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
          <a
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
            style={linkItemStyle}
          >
            <img
              src="GitHub-Mark-Light-32px.png"
              alt="pintrest logo"
              width="32"
              height="32"
            />
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
                href="#contact"
                to="/contact"
                style={navItemPadding}
              >
                <h2 className="customNavItem">Contact Me</h2>
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
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/contact" render={() => <Contact />} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
