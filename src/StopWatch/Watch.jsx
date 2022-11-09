// // import "./styles.css";
// import {useEffect, useState} from "react"



// export  function Watch() {
//   const [watch,setWatch]=useState(0)
//   const [stop,setStop]=useState()

//   const Watchandler=()=>{
//    setWatch(watch+1)
//   }

//   const stophandler =()=>{
//     setStop(stop)
//   }

//  const resetWatchandler=()=>{
//        setStop(0)
//  }
 
 
//   useEffect(()=>{
   
//     setInterval(()=>{},1000)
//     Watchandler()
//     stophandler()
//     resetWatchandler()
//   },)


 

//   return (
//     <div >
//        <h1>{watch}s </h1>
//        {/* {
//         watch? <button  onClick={Watchandler}>start</button>:<button  
//         onClick={stophandler}>stop</button>
//        }
//        */}
//        <button  onClick={Watchandler}>start</button>
//        <button  
//         onClick={stophandler}>stop</button>
//        <button onClick={resetWatchandler}>Reset</button>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import "./styles.css";

export  function Watch() {
  const [sec, setSec] = useState(60);
  const [isOn, setIsOn] = useState(false);
  const [id, setId] = useState(null);
  const [min, setMin] = useState(2);

  const handleReset = () => {
    setMin(5);
    setSec(0);
    setIsOn(false);
    clearInterval(id);
  };

  const handleTimer = (flag) => {
    setIsOn(!flag);
    if (flag) clearInterval(id);
    if (!flag) {
      setId(
        setInterval(() => {
          setSec((prev) => prev - 1);
        }, 100)
      );
    }
  };

  useEffect(() => {
    if (sec === -1) {
      if (min > 0) {
        setSec(59);
        setMin((prev) => prev - 1);
      } else {
        setMin(5);
        setSec(0);
        setIsOn(false);
        clearInterval(id);
      }
    }
  }, [sec, min, id]);

  return (
    <div className="App">
      <p>
        <span>0{min}s</span>:<span>{sec === 0 ? "00" : sec}s</span>
      </p>
      <button onClick={() => handleTimer(isOn)}>
        {!isOn ? "START" : "RESUME"}
      </button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
