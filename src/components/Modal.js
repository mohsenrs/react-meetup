import React from 'react'

function Modal(props) {
  return (
    <div className='modal'>
      <h2>Are you sure</h2>
      <button className='btn btn--alt' onClick={props.onCancel}>
        cancel
      </button>
      <button className='btn' onClick={props.onConfirm}>
        delete
      </button>
    </div>
  )
}

export default Modal
