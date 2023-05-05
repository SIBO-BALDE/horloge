

//Not start = 0
// Started = 1
//pause = 2

import React, { useState } from 'react'
import HorloComponent from './Component/HorloComponent'
import HorloBtn from './Component/HorloBtn'

export default function Horloge() {

const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
const [interv,setInterv] =useState()
const [state,setState]=useState(0) 


 const start= () =>{
  demarer();
  setState(1)
  setInterv(setInterval(demarer,10)) ;
 
 }

var updatedMs = time.ms,  updatedS = time.s,  updatedM = time.m, updatedH = time.h;

const demarer = () =>{
  if(updatedM === 60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs === 100){
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++
  return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
}
const stop = () =>{
  clearInterval(interv)
  setState(2)
}

const reset =() =>{
  clearInterval(interv)
  setState(0)
  setTime({ms:0, s:0, m:0, h:0})
}
const pause = () => start();

  return (
    <div className='horlo1'>
       <div>
          <div className='horlo'>
             <HorloComponent   time={time} />
             <HorloBtn  state={state} pause={pause} reset={reset}  stop={stop} start={start} />
         </div>
      </div>
  </div>
  )
}





