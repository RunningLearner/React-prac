import React from "react";

const App = () => {
  const number = 1;

  const double = (number) => {
    return number * 2;
  };

  const hello = () => {
    console.log("hello!!");
  };
  return (
    <>
      <div>{double(number)}</div>
      <button onClick={hello}>submit</button>
    </>
  );
};

export default App;
