import React from 'react'
import './Footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { IconButton } from '@mui/material';



function Footer() {
  return (
    <div className='bottomButtons'>
    <IconButton  className='replay'>
      <ReplayIcon fontSize='large'/>
    </IconButton>

    <IconButton  className='close'>
      <CloseIcon fontSize='large'/>
    </IconButton>
    
    <IconButton className='star'>
      <StarRateIcon fontSize='large'/>
    </IconButton>

    <IconButton className='favorite'>
      < FavoriteBorderIcon fontSize='large'/>
    </IconButton>

    <IconButton className='local'>
      <LocalFireDepartmentIcon fontSize='large'/>
    </IconButton>
    </div>
  )
}

export default Footer