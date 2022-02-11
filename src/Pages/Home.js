import "../custom.scss";
import "../App.css";

const Home = () => {
  return (
    <div className="contentPage">

      <div style={{ margin: "auto", paddingTop:70 }}>
        <h1 style={{ fontSize: 70 }}>Welcome!</h1>
        <h3>My name is Ethan! I'm a full stack and video game developer currently attending Fanshawe College<br /></h3>
        <h3>Take a look around this website to see some of the stuff I've made</h3>
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
