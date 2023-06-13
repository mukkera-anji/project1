import React from 'react'
import Data from '../Data.json'
import { Avatar } from '@mui/material'
import '../css/contacts.css'
export default function Contacts() {
  return (
    <div>
{

Data.map((val)=>{
return(
    <div className='contacts'>
  <Avatar/>      
<span> {val.name}</span>


    </div>




)

})



}


    </div>
  )
}
