//1 : object Destrucring in getdata() function
//2: rest and spread oprators in   : => rest is for restinga data in make a new array to short a array in one array
// in spread oprator this array to make a array expendable

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Please Click on advice");
  const [counter, setCounter] = useState(0);
  // const [score, setScore] = useState("");

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // const addList = () => {};

  // normal functioon examples.....
  // async function getData() {
  //   const data = await fetch("https://api.adviceslip.com/advice");
  //   const { slip } = await data.json();
  //   const { advice } = slip;
  //   setCounter(counter + 1);
  //   console.log(slip);
  //   console.log(advice);
  //   setAdvice(advice);
  // }

  // arrow function example...
  const getData = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await data.json();
    const { advice } = slip;
    setCounter(counter + 1);
    console.log(slip);
    console.log(advice);
    setAdvice(advice);
    // let age = 21;
    // let check = age ?? 19;
    // console.log(check);

    // let username = null || "guest";  OR oprator example  //output : guest
    let username = null ?? "guest"; // Nullish Coalescing Operator example // output : guest

    console.log(username);
    // Ternaries  oprators using in that below funcinalityyyys
    {
      counter >= 10 ? alert("Level 1 comlated") : "";
    }
    // {
    //   counter >= 10 ? totalScore() : "";
    // }
  };

  // const totalScore = () => {
  //   if (counter >= 10) {
  //     setScore("Level 1 Complted");
  //   } else if (counter >= 20) {
  //     setCounter("level 2 complated");
  //   }
  // };

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  //  confusig oprator : ------->   nullish coalescing oprator

  //fisrt time call component to call that getData() function called with advice with one couter value
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="container">
        {/* use in abouve template litral any javascript expression in this string*/}
        {/* use || OR logical oprator */}
        <p>{`Your Score is ${
          counter > 0 || false ? counter : "counter is 0"
        }`}</p>
        <h1> {advice} </h1> <button onClick={getData}> Get Advice </button>{" "}
        <h4>{time}</h4>
      </div>{" "}
    </>
  );
}

export default App;
