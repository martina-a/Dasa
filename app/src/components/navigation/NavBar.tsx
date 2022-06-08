import React, { useState } from 'react'
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import AssessmentIcon from '@mui/icons-material/Assessment'
import NotesSharpIcon from '@mui/icons-material/NotesSharp'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { pink } from '@mui/material/colors'
import '../../App.css'

/**
 * Component for the navigation bar.
 *
 * @returns
 */
function NavBar () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    const nav: any = document.getElementById('nav-bar')
    const btn: any = document.getElementById('nav-btn')

    if (!open) { // If closed, add these to classlist.
      setOpen(true)
      nav.classList.add('open')
      btn.classList.add('selected')
    } else {
      setOpen(false) // If open, remove them.
      nav.classList.remove('open')
      btn.classList.remove('selected')
    }
  }

  return (
    <div id='nav-bar'>
      <button onClick={() => toggleMenu()} id='nav-btn'>
          <ArrowForwardIosRoundedIcon id='arrow'/>
      </button>
      <div className='menu-item' onClick={() => toggleMenu()}>
        <BuildRoundedIcon sx={{ color: pink[500] }} className='menu-icon'/>
        <a href="/" className='menu-link'>
        Configuration
        </a>
      </div>
      <div className='menu-item' onClick={() => toggleMenu()}>
        <AssessmentIcon sx={{ color: pink[500] }} className='menu-icon'/>
        <a href="/status" className='menu-link'>
        Status
        </a>
      </div>
      <div className='menu-item' onClick={() => toggleMenu()}>
        <NotesSharpIcon sx={{ color: pink[500] }} className='menu-icon'/>
        <a href="/logs" className='menu-link'>
        Logs
        </a>
      </div>
    </div>
  )
}

export default NavBar
