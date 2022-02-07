import { createContext, useState } from 'react'

const favoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
})

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addUserFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  const removeUserFavoritesHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  const itemIsFavoritesHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addUserFavoritesHandler,
    removeFavorite: removeUserFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler,
  }

  return (
    <FavoritesContextProvider value={context}>
      {props.children}
    </FavoritesContextProvider>
  )
}

export default favoritesContext
