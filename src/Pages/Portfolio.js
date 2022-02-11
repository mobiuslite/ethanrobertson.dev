import { Carousel, Image } from "react-bootstrap";

const Portfolio = () => {

  let carouselStyle = {
    height: 550
  };

  return <div className="contentPage">
    <Carousel style={{ width: "70%", margin: "auto" }} interval={null}>
      <Carousel.Item style={carouselStyle}>
        <div>
          <Image src="HouseFront.png" style={carouselStyle} />
        </div>
        <Carousel.Caption>
          <h3>OpenGl Graphics Example 1</h3>
          <p>Created using OpenGL and Mineways (minecraft model exporter)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <div>
          <Image src="HouseBack.png" style={carouselStyle} />
        </div>
        <Carousel.Caption>
          <h3>OpenGl Graphics Example 2</h3>
          <p>Created using OpenGL and Mineways (minecraft model exporter)</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <iframe
          width="75%"
          style={{ maxHeight: 415, maxWidth: 660 }}
          height="75%"
          src="https://www.youtube.com/embed/wJoS3rx3DmY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <Carousel.Caption>
          <h3>Space Invaders Gameplay Example</h3>
          <p>Made in OpenGL and GLM. Created in less than 24 hours. <a className="customLink" href="files/Space Invaders Demo.zip" download>Download Game</a></p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <iframe
          width="75%"
          style={{ maxHeight: 415, maxWidth: 660 }}
          height="75%"
          src="https://www.youtube.com/embed/dvIXoGS-F94"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <Carousel.Caption>
          <h3>Physics Example</h3>
          <p>Created using OpenGL and GLM</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <div>
          <Image src="ai pic.png" style={carouselStyle} />
        </div>
        <Carousel.Caption>
          <h3>Artificial Intelligence Example</h3>
          <p>Created using Unity. Source Code and Build available on <a
          className="customLink"
          href="https://github.com/mobiuslite/SteeringBehavioursDemo"
          target="_blank"
          rel="noreferrer">Github</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <iframe
          width="75%"
          style={{ maxHeight: 415, maxWidth: 660 }}
          height="75%"
          src="https://www.youtube.com/embed/mOypcNv_dRw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <Carousel.Caption>
          <h3>Networking Example</h3>
          <p>Created using OpenGL, GLM, and Windows Sockets</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>;
};

export default Portfolio;