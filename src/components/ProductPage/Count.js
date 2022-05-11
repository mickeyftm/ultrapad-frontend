import React, { useState } from "react";
import Clock from "./Clock";

function App ({endTime}) {
    
   const [deadline,setDeadline]=useState(`2022-03-10T12:40:11.674Z`)



  
 
    return (
      <div className="App">
        <Clock deadline={deadline} />
      </div>
    );
  
}
export default App;
