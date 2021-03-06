import { Col, Container, Image, Row } from "react-bootstrap"
import { useState, useEffect } from "react"

let mainText = <div><h3>My name is Ethan! I'm a full stack and video game developer who has recently graduated from Fanshawe College's Computer Programming Analyst and Game Development programs.<br /></h3>
<h3>I've worked with languages such as C, C++, C#, Java, Javascript, and SQL.</h3>
<h3 style={{ fontSize: 12 }}>(Also HTML and CSS if you really want to consider them programming languages)<br /></h3>
<h3 style={{ paddingTop: 50 }}>I've also worked with APIs, Libraries, and Frameworks such as OpenGL, React, ASP.NET, Node.js, and many more!</h3></div>

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  return <div className="contentPage" style={{ paddingTop: 100, height: 2000 }}>

    {isMobile && (<div style={{ textAlign: "left", width: "90%", margin: "auto" }}>

      <h1>Hello!</h1>
      {mainText}
      <h3><br />If you would like to contact me, please email me at <a style={{ color: "#2d96ce" }} href="mailto:me@ethanrobertson.dev">me@ethanrobertson.dev.</a></h3>
      <Image src="me.jpg" style={{ width: "80%", maxWidth:500, height: "auto", borderRadius: 30 }} />

    </div>
    )}

    {!isMobile && (<div style={{ textAlign: "left", width: "80%", margin: "auto" }}>
      <Container>
        <Row>
          <Col sm={8}>
            <h1 style={{ fontSize: 100 }}>Hello!</h1>
            {mainText}
            <h3>If you would like to contact me, please email me at <a style={{ color: "#2d96ce" }} href="mailto:me@ethanrobertson.dev">me@ethanrobertson.dev.</a></h3>
          </Col>
          <Col sm={4}>
            <Image src="me.jpg" style={{ width: "100%", height: "auto", borderRadius: 30 }} />
          </Col>
        </Row>
      </Container>

    </div>
    )}



  </div>;
};

export default AboutMe;
