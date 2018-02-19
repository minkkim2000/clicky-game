import React from "react";
import "./Jumbotron.css";
import GameStats from "../GameStats";



const Jumbotron =  props => (
    <div className="jumbotron">
        <h1> 🎴 화투 Memory Game <i>(Battle of the Flowers)</i> 🎴 </h1>

        <p>  ───────  🌸 ───────  🌸 ───────  🌸 ───────  🌸 ───────  </p>

        <p>Click on a 🎴 below to earn points. You can't click on the same 🎴 more than once.</p>
        <p>Think you can remember all 48 cards? Good Luck!</p>
        <p style={{fontSize:10}}>+ Click <a href="https://en.wikipedia.org/wiki/Hanafuda" target = "blank">HERE</a> to learn more about 화투(pronounced <i>Hwatu</i> in Korean / translated: "Flower Cards") +</p>
        <hr />
        <GameStats score={props.score} topScore={props.topScore}/>
        <br/>
        <p style={{fontWeight:"bold", fontSize:24}}> Score: {props.score} | Top Score: {props.topScore} </p>

    </div>
);

export default Jumbotron;