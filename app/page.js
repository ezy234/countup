"use client";
import { CountUp } from "countup.js";
import { useEffect } from "react";
import "animate.css";

export default function Home() {
  useEffect(() => {
    new CountUp("targetId", 17, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });

    new CountUp("targetId2", 3401, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });

    new CountUp("targetId3", 234, {
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });
    // if (!countUp.error) {
    //   countUp.start();
    // } else {
    //   console.error(countUp.error);
    // }
  }, []);

  return (
    <div>
      <div className="banner">
        <p className="banner-text1">Experience</p>
        <p className="banner-text2 animate__animated animate_zoomInDown animate__delay-2s">
          CountUp.js 🔼
        </p>
      </div>
      <div className="count-down">
        <p>We have great achievement to show</p>
        <div>
          <div style={{ display: "flex" }}>
            <div id="targetId"></div>+
          </div>
          <p>yrs of experience</p>
        </div>
        <div>
          <div id="targetId2"></div>
          <p>successful projects</p>
        </div>
        <div>
          <div id="targetId3"></div>
          <p>clients</p>
        </div>
      </div>
      <p className=" pt-[10rem]"></p>
    </div>
  );
}
