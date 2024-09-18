import "./App.css";

function App() {
  // object for data to giving some function
  const data = {
    name: "Darshan",
    age: 20,
    skill: "drwing",
  };

  const country = {
    couname: "India",
    populchild: {
      number: 20000,
    },
    populman: {
      number: 30000,
    },
  };

  //Array example for filtering a which surname is same

  const surnames = [
    "Darshan Panchal",
    "I am Panchal",
    "Narendra Modi",
    "Rahul Modi",
    "Soniya Modi",
  ];
  // console.log(surnames);

  const getArray = () => {
    const arr = [3, 4, 5, 24, 343, 24, 53, 53, 4, 5, 4];
    const [zroindx, frstinx, thrdindx] = arr;
    console.log("Array destructring");
    console.log(zroindx, frstinx, thrdindx);
  };
  const getObj = () => {
    const objj = {
      name: "Darshan",
      age: 21,
      surname: "Panchal",
    };
    //obj destrcuring

    const { name, age, surname } = objj;

    console.log(" destructring");
    console.log(
      `My Name is ${name} , My Age is ${age} and My surname is ${surname} `
    );
  };

  const getRest = () => {
    console.log("rest op");
    const butter = [32, 53, 55, "dsf", "aww"];
    const [frst, snd, ...ddd] = butter;
    console.log(frst, snd, ddd);

    console.log("That is for objects");

    const objbutter = {
      name: "amul",
      price: 230,
      quantity: 23,
      ExpD: 2026,
    };
    const { name, price, ...other } = objbutter;
    console.log(name, price, other);

    //it's giving to ...rest oprator to get rested array from datarr
  };

  const getSpread = () => {
    console.log("Spread op");
    const jam = [32, 53, 55, "dsf", "aww"];
    const bread = [1, 3, 45, 6, ...jam];

    // full jam is spread in bread
    console.log(...bread);

    console.log("That is for objects");

    const objJam = {
      name: "Kishan Jam",
      price: 130,
      flavor: "red-jam",
      Exp: 2030,
    };

    const sandwich = {
      ...objJam,
    };

    console.log(sandwich);
  };

  const getLitrals = () => {
    const name = "Darshan";
    const myinfo = {
      age: 21,
      hobbie: "Gaming",
      intrest: "Codig",
    };

    const { age, hobbie, intrest } = myinfo;

    console.log(
      `My name is  ${name} , my age is ${age} , My main hobbie is ${hobbie} , interested in ${intrest}`
    );
  };

  const getTernories = () => {
    const name = prompt("Enter your name");
    const age = prompt(`hii ${name} , Enter your age `);

    const driveTest = age >= 18 ? `${name} can Drive` : `${name} can't drive`;
    console.log(driveTest);
  };

  const getArrow = () => {
    const { name } = data;
    console.log(`Hii ${name} welcome to our site`);
  };
  const getAnd = () => {
    console.log("Example of And oparetor");
    const { age, name } = data;
    if (age >= 18 && age <= 60) {
      console.log(`${name} stand for elaction `);
    } else {
      console.log("Not able for elaction");
    }
  };
  const getOr = () => {
    console.log("That's for a Or oprator");
    const counter = 15;
    const check = counter <= 20 || counter >= 20;

    {
      check
        ? console.log("Your data less than 20")
        : console.log("Your counter is greater than 20");
    }
  };

  const getOptionalChain = () => {
    // if (country && country.populbig && country.populbig.number) {

    // }
    console.log("Optional chaining", country.populchild?.number ?? 0);
    console.log("without Optional chaining", country.populman.number ?? 0);
  };

  const getMap = () => {
    const arr = ["Darshan", "Panchal", "Narendra ", "Modi"];

    arr.map((nme) => console.log(nme));

    console.log("Other example for map function");
    const numbers = [1, 4, 6, 3, 5, 24, 2];

    const totalNum = numbers.map((num) => (num += num));
    console.log(totalNum);
  };

  const getFilter = () => {
    const allsurnames = surnames.filter((nme) => nme.includes("Modi"));
    console.log(allsurnames);
  };

  const getReduce = () => {};

  const getSort = () => {};

  return (
    <>
      <div className="buttons">
        <button onClick={getArray}>Array Destructring</button>
        <button onClick={getObj}>Obj Destrctring</button>
        <button onClick={getRest}>Rest oprator</button>
        <button onClick={getSpread}>Spread oprator</button>
        <button onClick={getLitrals}>Template Litrals</button>
        <button onClick={getTernories}>Terenories opratores</button>
        <button onClick={getArrow}>Arrow Function</button>
        <button onClick={getAnd}>Logical ANd && </button>
        <button onClick={getOr}>OR and nullish</button>
        <button onClick={getOptionalChain}>Option-Chaining</button>
        <button onClick={getMap}>Map method</button>
        <button onClick={getFilter}>Filter Method</button>
        <button onClick={getReduce}>Reduce Method</button>
        <button onClick={getSort}>Array-Sorting Method</button>
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

// that sortig method is for changing a original array to it;s a mutable method
// import { useEffect, useState } from "react";

// const [advice, setAdvice] = useState("Please Click on advice");
// const [counter, setCounter] = useState(0);
// // const [score, setScore] = useState("");

// const [time, setTime] = useState(new Date().toLocaleTimeString());
// useEffect(() => {
//   setInterval(() => {
//     setTime(new Date().toLocaleTimeString());
//   }, 1000);
// }, []);

// arrow function example...
// const getData = async () => {
//   const data = await fetch("https://api.adviceslip.com/advice");
//   const { slip } = await data.json();
//   const { advice } = slip;
//   setCounter(counter + 1);
//   console.log(slip);
//   console.log(advice);
//   setAdvice(advice);

//   // Ternaries  oprators using in that below funcinalityyyys
//   {
//     counter >= 10 ? alert("Level 1 comlated") : "";
//   }
// };

// for Nullishh opratores

// console.log("That's for a Nullish oprator");

// const nullishcheck = count ?? counter <= 20;
// {
//   nullishcheck ? console.log(count) : console.log("Your data not up 20");
// }
