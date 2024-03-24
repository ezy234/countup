"use client";
import { CountUp } from "countup.js";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const countUp = new CountUp("countup", 5234);

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, []);
  return (
    <div>
      <div id="countup"></div>
    </div>
  );
}
