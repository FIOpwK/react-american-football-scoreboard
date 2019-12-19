//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setScore] = useState(0);
  const [away, setScoreAway] = useState(0);
  const [play, setClock] = useState(1);
  const [yard, setMarker] = useState(0);
  const [down, setDown] = useState(0);
  const [ball, setBall] = useState(1)
  const [time, setTime] = useState(0)
  // const [seconds, setSeconds] = useState(0);
  // const [active, setActive] = useState(false);








  const touchDownHome = e => {
    //add 7 for home team score
    setScore(home + 7);

    console.log('touchDownHome');


  };

  const touchDownAway = e => {
    //add 7 for away team score
    setScoreAway(away + 7);

    console.log('touchDownAway')
  };

  const fieldGoalHome = e => {
    //add 3 for home team score
    setScore(home + 3);

    console.log('fieldGoalHome');
  };

  const fieldGoalAway = e => {
    //add 3 for away team score
    setScoreAway(away + 3);

    console.log('fieldGoalAway');
  };

  //STRETCH goal
  const changeQuarter = e => {
    const q = document.querySelector('.quarter__value');
    const text = 'OT';
    q.textContent = `${play}`;
    //increment quarter by 1 unless greater than 4, then OT.
    setClock(1);
    if (play > 4) {
      q.textContent = `${text}`;
    } else {
      setClock( play + 1)
    }

    // yardStick(setMarker( 0))

  };

  const yardStick = e => {
    const yardstick = document.querySelector('.toGo__value');

    setMarker(yard + 1)
    if (yard > 99) {
      setMarker(0)
    }
    yardstick.textContent = `${yard}`
  };

  const downMarker = e => {
    const marker = document.querySelector('.down__value');
    setDown(down + 1);
    if (down > 3) {
      setDown(1);
    }
        marker.textContent = `${down}`

  };

  const toggle_ball = () => { setBall(ball - 1) }


  const toggle = (e) => {
    const ball_on = document.querySelector('.ballOn__value')
    setBall(ball + 1);

    ball_on.textContent = `${ball}`;
  }


  const timer = e => {
    const t = document.querySelector('.timer')
    const d = new Date();
    const n = d.getHours();


    t.textContent = `${n}`
  }

  const reset = (e) => {
    setScore(0);
    setScoreAway(0);
    setBall(1);
    setClock(1)
    toggle_ball();

  }
  //
  // useEffect(() => {
  //   let interval = null;
  //   if (active) { interval = setInterval(() => {setSeconds(seconds => seconds - 1)}, 150000); }
  //   else if (!active && seconds !== 0) { clearInterval(interval);  }
  //
  //   return () => clearInterval(interval);
  //
  // }, [ active, seconds]);
  //



  return (
    <div className="container">
      <button onClick={toggle}>Ball On</button>
      {/*added buttons for STRETCH*/}
      <button onClick={changeQuarter}>Quarter</button>
      <button onClick={downMarker}>Down Marker</button>
      <button onClick={timer}>Timer</button>

      <button onClick={yardStick}>To Go</button>
      <button onClick={reset}>Reset</button>

      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Ravens</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Bangles</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchDownHome} className="homeButtons__touchdown" >Home Touchdown</button>
          <button onClick={fieldGoalHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={touchDownAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fieldGoalAway}>Away Field Goal</button>
        </div>
      </section>


    </div>
  );
}

export default App;
