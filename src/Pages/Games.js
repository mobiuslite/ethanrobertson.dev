
let gameStyle = {

  height: 515,
  paddingBottom: 100,

};

const Games = () => {
  return <div className="contentPage">
    <div style={gameStyle}>
      <h1>Balloon Popping Simulator 2022</h1>
      <iframe
        width="75%"
        style={{ maxHeight: 415, maxWidth: 660 }}
        height="75%"
        src="https://www.youtube.com/embed/Y8eBfyNTkA4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <h3>Made using OpenGL, GLM, FMOD, and ASSIMP for a Game Jam.</h3>
      <h3><a
        className="customLink"
        href="https://mobiuslite.itch.io/balloon-popping-simulator-2022"
        target="_blank"
        rel="noreferrer">
        itch.io Game Page
      </a></h3>
    </div>

    <div style={gameStyle}>
      <h1>1v1 FPS Game (WIP)</h1>
      <iframe
        width="75%"
        style={{ maxHeight: 415, maxWidth: 660 }}
        height="75%"
        src="https://www.youtube.com/embed/XZQ1AMQ8Dpo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <h3>Made in Unity using Photon Pun in a couple weeks.</h3>
      <h3>Releasing for free on itch.io when complete.</h3>
    </div>
  </div>;
};

export default Games;