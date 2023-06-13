import React from 'react';
import './css/content.css'
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import Unread from './contentcomponents/Unread'
import All from './contentcomponents/All'
import Calls from './contentcomponents/Calls'
import Meetings from './contentcomponents/Meetings'
import Missed from './contentcomponents/Missed'
import Voicemails from './contentcomponents/Voicemails'
import Recordings from './contentcomponents/Recordings'
import Messages from './contentcomponents/Messages'
import Startted from './contentcomponents/Startted'
import spam from './contentcomponents/Spam'
import Spam from './contentcomponents/Spam';
 

function Content(){
  return (
    <div className="content">
<BrowserRouter>
<div className='Links__box'>
<NavLink className="Links" to='unread'>Unread</NavLink>
<NavLink  className="Links" to='/'>All</NavLink>
<NavLink className="Links"  to='calls'>Calls</NavLink>
<NavLink className="Links"  to='missed'>Missed</NavLink>
<NavLink className="Links"  to='meetings'>Meetings</NavLink>
<NavLink className="Links"  to='voicemails'>Voicemails</NavLink>
<NavLink className="Links"  to='recordings'>Recordings</NavLink>
<NavLink className="Links"  to='messages'>Messages</NavLink>
<NavLink className="Links"  to='startted'>Startted</NavLink>
<NavLink className="Links"  to='spam'>Spam</NavLink>
</div>
<Routes>

<Route path='unread'  elemet={<Unread/>} ></Route>
<Route path='/' element={<All/>} ></Route>
<Route path='calls' element={<Calls/>}></Route>
<Route path='missed' element={<Missed/>} ></Route>
<Route path='meetings' element={<Meetings/>} ></Route>
<Route path='voicemails' element={<Voicemails/>} ></Route>
<Route path='recordings' element={<Recordings/>} ></Route>
<Route path='messages' element={<Messages/>} ></Route>
<Route path='startted' element={<Startted/>} ></Route>
<Route path='spam' element={<Spam/>} ></Route>


</Routes>




</BrowserRouter>



    </div>
  );
};

export default Content;
