import React from 'react'
import SidebarOptions from './components/SidebarOptions'
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import Contacts from './components/Contacts';
import './css/sidebar.css'

export default function Sidebar() {
 
  

  return (
  
    <div className='Sidebar'>
     <SidebarOptions tittle='Inbox' Icone={InboxTwoToneIcon}  isactive={true} />
      <SidebarOptions tittle='contacts' Icone={ContactsTwoToneIcon}  isactive={false}  />
     <Contacts/>
     

    </div>
  
  )
}
