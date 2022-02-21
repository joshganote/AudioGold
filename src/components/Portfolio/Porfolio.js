import React, { useState, useEffect } from "react";
import { ContentContainer, DefaultContainer } from "../styles/globalStlyes";
import { Grid, Box } from "@mui/material";
import Footer from "../Footer/Footer";
import { IoClose } from "react-icons/io5";
import SyncLoader from "react-spinners/SyncLoader";
import { Oval } from "react-loading-icons";

import "./Portfolio.css";
import { Library } from "../Library/Library";

const Porfolio = () => {
  const [videoPlay, isVideoPlay] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videoPath, setVideoPath] = useState("");

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-introduction m-bottom">
          <h1 style={{color: 'white'}}>Come take a look what we've done for other companies</h1>
        </div>
        <div className="header-text">
          <h1 className="product-header">Product Demo</h1>
          <div className="divider"></div>
        </div>
        <div className="img-wrapper">
          <Grid container spacing={1}>
            {Library.videos.map((video, index) => (
              <>
                <Grid item md={6} sm={12} key={index}>
                  <img
                    src={video.portPic}
                    alt="photos"
                    onClickCapture={() => setVideoPath(video.portVideo)}
                    onClick={() => isVideoPlay(true)}
                    className="port-pic"
                  />
                </Grid>
                {videoPlay ? (
                  <>
                    <div className="video-player isVisible">
                      <div id="video-player">
                        <iframe
                          width="1280"
                          height="720"
                          className="video-test"
                          src={videoPath}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <div className="close">
                          <IoClose
                            size={30}
                            color="white"
                            onClick={() => isVideoPlay(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Grid>
          {/* <>
            {videoPlay ? (
              <>
                <div className="video-player isVisible" key={index}>
                  <div id="video-player">
                    <iframe
                      width="1280"
                      height="720"
                      className="video-test"
                      src={video.portVideo}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                    <div className="close">
                      <IoClose
                        size={30}
                        color="white"
                        onClick={() => isVideoPlay(false)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </> */}
        </div>
      </div>
        <div className="header-text m-top">
          <h1 className="product-header">Product Review</h1>
          <div className="divider"></div>
        </div>
        <div className="img-wrapper">
          <Grid container spacing={1}>
            {Library.videos.map((video, index) => (
              <>
                <Grid item md={6} sm={12} key={index}>
                  <img
                    src={video.portPic}
                    alt="photos"
                    onClickCapture={() => setVideoPath(video.portVideo)}
                    onClick={() => isVideoPlay(true)}
                    className="port-pic"
                  />
                </Grid>
                {videoPlay ? (
                  <>
                    <div className="video-player isVisible">
                      <div id="video-player">
                        <iframe
                          width="1280"
                          height="720"
                          className="video-test"
                          src={videoPath}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <div className="close">
                          <IoClose
                            size={30}
                            color="white"
                            onClick={() => isVideoPlay(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Porfolio;

/* <div className="video-player isVisible">
      {loading ? (
        <div>
          <Oval height={100} width={100} color="white" />
        </div>
      ) : (
        <div id="video-player">
          <iframe
            width="1280"
            height="720"
            className="video-test"
            src={videoPath}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <div className="close">
            <IoClose
              size={30}
              color="white"
              onClick={() => isVideoPlay(false)}
            />
          </div>
        </div>
      )}
    </div> */
/* <iframe
  className="video-test"
  src={`https://www.youtube.com/embed/v9dIysPyKPw`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/> */
/* <iframe
    className="video-test"
    src={`https://www.youtube.com/embed/v9dIysPyKPw`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  /> */
// <>
//   <div className="video-player isVisible">
//     <div id="video-player">
//       <iframe
//         width="1280"
//         height="720"
//         className="video-test"
//         src={homeVideo}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="Embedded youtube"
//       />
//     </div>
//     <div className="close">
//     <IoClose size={30} color="white" onClick={() => isVideoPlay(false)}/>
//   </div>
//   </div>
// </>
/* <div className="hello">
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url="https://www.youtube.com/embed/v9dIysPyKPw"
      width="100%"
      height="100%"
    />
  </div>
  </div> */
/* <div className="video-container">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=v9dIysPyKPw"
              width="50%"
              height="50%"
              controls={true}
            />
          </div>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=v9dIysPyKPw"
              width="50%"
              height="50%"
              controls={true}
            />
          </div>
        </div> */
