import React from 'react'
import { Avatar,IconButton } from '@mui/material'
import '../css/allcomponet.css'
export default function CallList({Icone,name,type,time}) {



  
  return (
    <div className='all_component'>
       <div className='allcomponent__left'>
       <IconButton>
          <Avatar>{Icone}</Avatar>
        </IconButton>
        <p className='letft__p'>{name} </p>
        
       </div>
       <div className='allcomponent__middle'>

        <p className='middle__p'>{type} </p>
        
       </div>

       <div className='allcomponent__right'>
       
        <p className='right__p' >{time} </p>
        
       </div>

    </div>
  )
}
