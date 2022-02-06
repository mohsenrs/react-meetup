import React from 'react'
import { useHistory } from 'react-router-dom'
import NewMeetupForm from './../components/meetups/NewMeetupForm'

function NewMeetUp() {
  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-meetup-c3232-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetUp
