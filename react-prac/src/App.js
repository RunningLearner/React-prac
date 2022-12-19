import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(1);

  const double = () => {
    setNumber(number * 2);
    console.log(number);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>submit</button>
    </>
  );
};

export default App;
