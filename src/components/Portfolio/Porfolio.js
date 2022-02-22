import React from "react";
import { ContentContainer, DefaultContainer } from "../styles/globalStlyes";
import Footer from "../Footer/Footer";
import './Portfolio.css'

const Porfolio = () => {
  return (
    <ContentContainer>
      <DefaultContainer>
        <div style={{ paddingLeft: "5em", paddingRight: "4em" }}>
          <h1>Product Review</h1>
          <div style={{ borderTop: "2px solid white" }}></div>
        </div>
        <div style={{marginTop: '1em', paddingLeft: "5em", paddingRight: "4em"}}>
          <div className="test">
            <iframe
              width="512"
              height="288"
              src={`https://www.youtube.com/embed/v9dIysPyKPw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <iframe
              width="512"
              height="288"
              src={`https://www.youtube.com/embed/v9dIysPyKPw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <iframe
              width="512"
              height="288"
              src={`https://www.youtube.com/embed/v9dIysPyKPw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <Footer />
      </DefaultContainer>
    </ContentContainer>
  );
};

export default Porfolio;
