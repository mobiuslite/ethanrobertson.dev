import "../custom.scss";
import "../App.css";

import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="contentPage" style={{ fontFamily: "Open Sans" }}>
      <h4>Home</h4>
      <Button variant="outline-primary">Test</Button>
    </div>
  );
};

export default Home;
