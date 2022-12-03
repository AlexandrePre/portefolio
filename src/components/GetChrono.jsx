import { useState, useEffect } from "react";
import "../App.css";

function Getchrono() {
  const [nseconds, setNSeconds] = useState();
  const [nminutes, setNMinutes] = useState();
  const [nhours, setNHours] = useState();
  const [ndays, setNDays] = useState();

  const countdownDate = new Date("february 10, 2023").getTime();
  const now = new Date().getTime();
  const distanceBase = countdownDate - now;

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setNDays(Math.floor(distanceBase / (1000 * 60 * 60 * 24)));
      setNHours(
        Math.floor(
          (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toFixed(0)
      );
      setNMinutes(
        Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60)).toFixed(0)
      );
      setNSeconds(Math.floor((distanceBase % (1000 * 60)) / 1000).toFixed(0));
    }, 1000);
    return () => clearInterval(timer);
  },);

  return (
    <div className="chrono">
      <h1> Temps restant avant la fin de formation</h1>
      <p>
        {ndays}d {nhours}j {nminutes}m {nseconds}s
      </p>
    </div>
  );
}

export default Getchrono;
