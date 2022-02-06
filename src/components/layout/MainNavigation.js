import React from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetup</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
