import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
import { IconButton } from '@mui/material';
function Header() {
  return (
    <div className='Tinder-Header'>
        <IconButton>
        <PersonIcon className ='Header-icons' fontSize = 'large'/>
        </IconButton>
        <img fontSize = 'large' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6R8LFa84kksYqYFi-CvjKJHul-K4ZJ6yNQ4e0EVChBOzhXGeOjbrNNN8amJ81_CYc1o&usqp=CAU'/>
        <IconButton>
        <ForumIcon className ='Header-icons' fontSize = 'large'/>
        </IconButton>
    </div>
  )
}

export default Header