import React, { useState } from "react";
function App() {
  return (
    <>
      <HeaderWithButton />
      <Name abc="hi" />
      <Name xyz="2nd name" />
      <Name title="My name is 3rd party" />
    </>
  )
  
  function HeaderWithButton() {
    const [abc, setAbc] = useState("Adarsh");
    const [xyz, setXyz] = useState("My name is Romy");
    function updatetitle(){
      setAbc(`My name is ${Math.random()}`);
      setXyz(xyz.toUpperCase());
    }
    return (
      <div>
        <button onClick={updatetitle}>Change Title</button>
        <h1>{abc}</h1>
        <h2>{xyz}</h2>
      </div>)
  }
  function Name(props) {
    return (
      <div>
        {props.abc}
        {props.xyz}
        {props.title}
      </div>
    );
  }
}

export default App;
