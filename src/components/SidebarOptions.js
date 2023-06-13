import React from 'react'
import '../css/sidebaroptions.css'

export default function SidebarOptions({tittle,Icone,isactive}) {




  return (
    <>
    <div className= {`Sidebaroptions ${isactive && `Sideoptions--active`}`} >
     <Icone/>
    <p>{tittle}</p>
    </div>
  
    </>
  )
}
