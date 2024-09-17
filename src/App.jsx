//1 : object Destrucring in getdata() function
//2: rest and spread oprators in   : => rest is for restinga data in make a new array to short a array in one array
// in spread oprator this array to make a array expendable
// 3 : Template litral in  last to print a score of levelss
// 4 Ternory oprator is used in showing alrt in use score 10 it's level 1 is complated
// 5 : All function is a arrow function
//6 : OR and ??  Nullish Coalescing oprato used in with one exmple
//7 : Sorting method in aarray...... it's sort aary to assending and desending
// that sortig method is for changing a original array to it;s a mutable method
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Please Click on advice");
  const [counter, setCounter] = useState(0);
  // const [score, setScore] = useState("");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  // arrow function example...
  const getData = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await data.json();
    const { advice } = slip;
    setCounter(counter + 1);
    console.log(slip);
    console.log(advice);
    setAdvice(advice);

    // Ternaries  oprators using in that below funcinalityyyys
    {
      counter >= 10 ? alert("Level 1 comlated") : "";
    }
  };

  const getArray = () => {};
  const getObj = () => {};
  const getRest = () => {};
  const getSpread = () => {};
  const getLitrals = () => {};
  const getTernories = () => {};
  const getArrow = () => {};
  const getAnd = () => {};
  const getOr = () => {};

  return (
    <>
      <div className="buttons">
        <button onClick={getArray}>Array Destructring</button>
        <button onClick={getObj}>Obj Destrctring</button>
        <button onClick={getRest}>Rest op</button>
        <button onClick={getSpread}>Spread op</button>
        <button onClick={getLitrals}>Template Litrals</button>
        <button onClick={getTernories}>Terenories op</button>
        <button onClick={getArrow}>Arrow Function</button>
        <button onClick={getAnd}>Logical and</button>
        <button onClick={getOr}>Obj Destrctring</button>
      </div>
      {/* <div className="container">
        use in abouve template litral any javascript expression in this string*/}
      {/* use || OR logical oprator
        <p>{`Your Score is ${
          counter > 0 || false ? counter : "counter is 0"
        }`}</p>
        <h1> {advice} </h1> <button onClick={getData}> Get Advice </button>{" "}
        <h4>{time}</h4>
      </div>{" "} */}
    </>
  );
}

export default App;
