import React, { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from './../UI/Card'
import favoritesContext from '../../store/favorites-context'

function MeetUpItem(props) {
  const favoritesCtx = useContext(favoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavoritesHandler(props.id)

  const toggleFavoriteStatusHandler = () => {
    if
  }

  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt='' />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>To Favs</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetUpItem
