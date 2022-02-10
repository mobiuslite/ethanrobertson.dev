import { Col, Container, Image, Row } from "react-bootstrap"

const AboutMe = () => {
  return <div className="contentPage" style={{ paddingTop: 100 }}>

    <div style={{ textAlign: "left", width: "50%", margin: "auto" }}>
      <Container>
        <Row>
          <Col sm={8}>
            <h1 style={{ fontSize: 100 }}>Hello!</h1>
            <h3>My name is Ethan! I'm a full stack and video game developer currently attending Fanshawe College<br /></h3>
            <h3>I've worked with languages such as C, C++, C#, Java, Javascript, and SQL</h3>
            <h3 style={{ fontSize: 12 }}>(Also HTML and CSS if you really want to consider them programming languages)<br/></h3>
            <h3 style={{paddingTop: 50}}>I've also worked with APIs, Libraries, and Frameworks such as OpenGL, React, ASP.NET, Node.js, and many more!</h3>
          </Col>
          <Col sm={4}>
            <Image src="me.jpg" style={{ width: "100%", height: "auto", borderRadius: 30 }} />
          </Col>
        </Row>
      </Container>

    </div>

  </div>;
};

export default AboutMe;
