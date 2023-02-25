import React from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const ResponsiveCarousal = () => {
  return (
    <>
    <Carousel
      className="carousel"
      autoPlay="true"
      infiniteLoop="true"
      interval="1500"
      showThumbs=""
      // width={"94%"}
      // centerMode="true"
      // dynamicHeight="false"
    >
      <div>
        <img
          src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt="img 1"
        />
      </div>
      <div>
        <img
          src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt="img 2"
        />
      </div>
      <div>
        <img
          src="https://images.dailyobjects.com/marche/colllectionPage/zootopia/smartsters-homepages-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt="img 3"
        />
      </div>
      <div>
        <img
          src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1"
          alt="img 4"
        />
      </div>
    
    </Carousel>
    <br/>
    </>
  );
};

export default ResponsiveCarousal;

