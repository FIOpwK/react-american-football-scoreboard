//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setScore] = useState(0);
  const [away, setScoreAway] = useState(0);

  const touchDownHome = e => {
    setScore(home + 7);
    console.log('clicked touchDownHome');

  };

  const touchDownAway = e => {
    setScoreAway(away + 7);
    console.log('clicked touchDownAway' )
  }

  const fieldGoalHome = e => {
    setScore(home + 3);
    console.log('clicked fieldGoalHome');
  };

  const fieldGoalAway = e => {
    setScoreAway(away + 3);
    console.log('clicked fieldGoalAway');
  };

  return (
    <div className="container">
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
