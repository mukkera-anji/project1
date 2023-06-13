import React from 'react';
import './css/navbar.css'
import { IconButton,Avatar } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const Navbar = () => {
  return (
 <div className='Navbar'>

<div className='Navbar__left'>

<div className='img__box'>
<img width='25px'   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8tEohDo2yK2xvRUNGfPaXViUQC-L9kp5T0JIBC8ZhvJuM07ePRGJLN3PwihRIay_Tk4&usqp=CAU'/>
</div>


<div className='icon__box'>



<IconButton>
<LocalPhoneIcon/>
</IconButton>
<IconButton>
<ChatBubbleOutlineRoundedIcon/>
</IconButton>
<IconButton>
<VideocamRoundedIcon/>
</IconButton>
</div>
</div>

<div className='Navbar__middle'>
<IconButton>
<ArrowBackRoundedIcon/>
</IconButton>
<IconButton>
< ArrowForwardRoundedIcon />
</IconButton>
<IconButton>
<RefreshRoundedIcon/>
</IconButton>
<div className='search__box'>
<SearchRoundedIcon/>
<input type='text' placeholder='Search Dailpad'/>

</div>

</div>

<div className='Navbar__right'>
<IconButton>
<SettingsRoundedIcon/>
</IconButton>
<IconButton>
<CalendarTodayRoundedIcon/>
</IconButton>
<IconButton>
<Avatar>SP</Avatar>
</IconButton>
<IconButton>
< MoreVertRoundedIcon/>
</IconButton>
</div>

 </div>
  );
};

export default Navbar;
