import "../custom.scss";
import "../App.css";

const Home = () => {
  return (
    <div className="contentPage">

      <div style={{ margin: "auto", paddingTop:70 , maxWidth:1600 }}>
        <h1 style={{ fontSize: 50 }}>Welcome!</h1>
        <h3>My name is Ethan! I'm a full stack and video game developer who has recently graduated from Fanshawe College's Computer Programming Analyst and Game Development programs.<br /></h3>
        <h3>Take a look around this website to see some of the games I've created as well as some sample code!</h3>
      </div>

      <div style={{paddingTop: 74}}>
        <h3>Source code for this website is available on <a
          className="customLink"
          href="https://github.com/mobiuslite/ethanrobertson.dev"
          target="_blank"
          rel="noreferrer">Github</a>
        </h3>
      </div>
    </div>
  );
};

export default Home;
