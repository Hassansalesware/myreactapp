import React from "react";
import Navbar from "../components/Navbar";
import SwipperSlider from "../components/swipperslider";

export default function home() {
  return (
    <div>
      <Navbar />
      <section className="herobanner"></section>
      {/* hero benner end */}

      <section className="first-sec">
        <div className="container">
          <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 left-content">
                  <h4>ABOUT US</h4>
                  <h1>LUXIRIOUS <span>NIGHT</span> SOLUTIONS</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur
                  </p>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 right-images">
                  <img src="..\images\image 13.png" />
                </div>
        </div>
        </div>
      </section>
      {/* first-sec end */}

      <section className="second-sec">
        <div className="container">
          <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 right-images">
                  <img src="..\images\DSC01668-Enhanced-NR 1.png" />
                </div>
              <div className="col-md-6 col-lg-6 col-sm-12 left-content">
               
                  <h1>PERFECT <span>COCKTAILS</span> & <span>APPETIZERS</span> </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur
                  </p>
                </div>
        </div>
        </div>
      </section>
       {/* second-sec end */}

      <section className="Slider-sec" >
        <SwipperSlider />
      </section>     
      {/* slider-sec end */}
    

    
    
    
    
    
    
    
    
    
    </div>

  );
}
