import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const EditPost = ({idReview, mostrarModal}) => {
  const edit = (id) => {
    axios.get(`http://localhost:3001/${id}`)
      .then((res) => {
        const review = res.data
        console.log(review)

        mostrarModal(review)
    })
    
  }
  
    
    
  return (
    <button onClick={() => edit(idReview)} className='icon'><FontAwesomeIcon icon={faPenToSquare} /></button>
  )
}

export default EditPost