import "./MyWork.css";
import VideoPlayer from "../components/VideoPlayer";

const MyWork: React.FC = () => {
  document.body.style.background = "#cedbe6";
  return (
    <>
      <div className="title-text">
        <h1>My Work</h1>
      </div>
      <div className="video-grid">
        <div className="insta-section">
          <h2>Memes for @realstiffy</h2>
          <div className="video-container">
            <VideoPlayer url="./gorillaspin.mp4" />
            <VideoPlayer url="./spongebobchess.mp4" />
            <VideoPlayer url="./whatsappcar.mp4" />
            <VideoPlayer url="./catsmash.mp4" />
            <VideoPlayer url="./corn.mp4" />
            <VideoPlayer url="./clashroyale.mp4" />
          </div>
        </div>
        <div className="work-section">
          <h2>Commissions</h2>
          <div className="video-container">
            <VideoPlayer url="./spaceani.mp4" />
            <VideoPlayer url="./musicenjoyer.mp4" />
            <VideoPlayer url="./lp4tk.mp4" />
            <VideoPlayer url="./fatboysse.mp4" />
            <VideoPlayer url="./shrekpizza.mp4" />
            <VideoPlayer url="./spiceadams.mp4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWork;
