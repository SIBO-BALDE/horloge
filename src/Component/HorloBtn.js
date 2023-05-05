import React from 'react'

export default function HorloBtn(props) {


// 

  return (
    <div className='child'>
      {(props.state=== 0)?
      <button className='btn-demar' onClick={props.start} > Demarer </button>: ''
      }
      {(props.state === 1)?
     <di>
        <button className='btn-red' onClick={props.stop} >Arrettez</button>&nbsp;
        <button className='btn-demar' onClick={props.start} >  Demarer </button>&nbsp;
        
     </di>: ''
      }
      {(props.state === 2)?
     <di>
        <button className='btn-green' onClick={props.reset} > Rejetez </button>&nbsp;
        <button className='btn-orange' onClick={props.pause} >Redemarer</button>&nbsp;
     </di>: ''
      }
   
    </div>
  )
}
