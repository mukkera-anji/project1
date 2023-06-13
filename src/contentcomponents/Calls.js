import React, { useEffect, useState } from 'react'
import Data from '../Data.json'
import '../css/call.css'

export default function Calls() {





  return (
<div  className='box'>
{
  Data.map((val)=>{
return(

<div className='targets' >
<h5>{val.name}</h5>
<h5>{val.canact}</h5>
<h5>{val.callTyee}</h5>
  </div>


)
  })
}




</div>

  )
}
