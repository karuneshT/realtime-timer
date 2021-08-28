import React from "react";

function App() {
  const time= new Date().toLocaleTimeString();
  const [timer,setTimer]=React.useState(time);

  function clock(){
    const newTimer=new Date().toLocaleTimeString();
    setTimer(newTimer);
    
  }

  return (
    <div className="App">
      <h1>{timer}</h1>
      <button onClick={setInterval(clock,1000)} >Time</button>
    </div>
  );
}

export default App;
