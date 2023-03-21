import React from 'react'

const Post = ({mostrarModal}) => {
    const handleClickShowModal = e => {
        e.preventDefault()
        mostrarModal()
      }

  return (
    <div className='btnPost'>
        <button className="btn btn-primary btn-lg" onClick={handleClickShowModal}>Escribir una reseña</button>
    </div>
  )
}

export default Post