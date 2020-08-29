import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'

export default function Search () {
  return (
    <div className='search'>
      <div className='search-input'>
        <SearchIcon className='search-input-icon' />
        <input />
        <MicIcon />
      </div>
      <div className='search-buttons'>
        <Button>Google Search</Button>
        <Button variant='outline'>I'm Feeling Lucky</Button>
      </div>
    </div>
  )
}