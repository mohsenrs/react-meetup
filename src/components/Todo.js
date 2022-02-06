import React from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
import { useState } from 'react'

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deleteHandler = () => {
    setIsModalOpen(true)
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {isModalOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo
