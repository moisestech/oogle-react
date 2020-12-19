import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'

function HomeHeader () {
  return (
    <>
      <div className='home-header-left'>
        <Link to='/about'>About</Link>
        <Link to='/store'>Store</Link>
      </div>
      <div className='home-header-right'>
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
    </>
  )
}

export default function Home () {
  return (
    <div className='home'>
      <div className='home-header'>
        <HomeHeader />
      </div>

      <div className='home-body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt=''
        />

        <div className='home-input-container'>
          <Search />
        </div>
      </div>
    </div>
  )
}