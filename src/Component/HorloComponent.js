import React from 'react'

export default function HorloComponent(props) {



  return (
   
    <div className='heur'>
      <span className='span1'> {(props.time.h >= 10)? props.time.h : '0'+ props.time.h} </span>&nbsp;:&nbsp;
      <span className='span2'> {(props.time.m >= 10)? props.time.m : '0'+ props.time.m} </span>&nbsp;:&nbsp;
      <span className='span3'> {(props.time.s >= 10)? props.time.s : '0'+ props.time.s} </span>&nbsp;:&nbsp;
      <span className='span4'> {(props.time.ms >= 10)? props.time.ms : '0'+ props.time.ms} </span>&nbsp;
    </div>
    
  )
}
