"use client";
import { CountUp } from "countup.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const count = new CountUp("theTargetID", 590);

    if (count.error) {
      console.error(error);
    } else {
      count.start();
    }
  }, []);
  return (
    <div>
      <div id="theTargetID"></div>
    </div>
  );
}
