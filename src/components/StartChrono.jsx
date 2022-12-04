import { useState, useEffect } from "react";
import "../App.css";

function Startchrono() {
  const [nseconds, setNSeconds] = useState();
  const [nminutes, setNMinutes] = useState();
  const [nhours, setNHours] = useState();
  const [ndays, setNDays] = useState();

  const startdownDate = new Date("september 14, 2022").getTime();
  const now = new Date().getTime();

  const startFormation = now - startdownDate;

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setNDays(Math.floor(startFormation / (1000 * 60 * 60 * 24)));
      setNHours(
        Math.floor(
          (startFormation % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toFixed(0)
      );
      setNMinutes(
        Math.floor((startFormation % (1000 * 60 * 60)) / (1000 * 60)).toFixed(0)
      );
      setNSeconds(Math.floor((startFormation % (1000 * 60)) / 1000).toFixed(0));
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="chronostart">
      <h3> A commencé la formation de développeur depuis </h3>
      <p>
        {ndays}J {nhours}H {nminutes}M {nseconds}S
      </p>
    </div>
  );
}

export default Startchrono;
