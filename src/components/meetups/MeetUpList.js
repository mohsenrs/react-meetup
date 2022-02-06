import React from 'react'
import classes from './MeetupList.module.css'
import MeetUpItem from './MeetUpItem'

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        ></MeetUpItem>
      ))}
    </ul>
  )
}

export default MeetUpList
