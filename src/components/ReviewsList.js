import axios from 'axios'
import { useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditPost from './EditPost'
import Swal from 'sweetalert2'
import { Context } from '../context/Context'


const ReviewsList = ({ mostrarModal }) => {

  const { updateList, listarReviews, removeReview } = useContext(Context)

  useEffect(() => {
    listarReviews()
  }, [])


  const removePost = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })

      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3001/api/review/${id}`)
            .then((res) => {
              console.log(res)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              removeReview(id)
            }).catch((err) => {
              Swal.fire(
                'Not Deleted!',
                'Error',
                'error'
              )
            })

        }
      })

  }

  return (
    <div className="container">
      <hr />
      <h2>Reseñas de los clientes</h2>
      <div className='postContainer'>
        {updateList.map((review) => {
          return (
            <div className='post'>
              <div className='title'> {review.title} </div>
              <div className='body'> {review.post_text} </div>
              <div className='footer'>
                <div>{review.user_name} </div>
                <EditPost mostrarModal={mostrarModal} idReview={review.id_form} />
                <button onClick={() => removePost(review.id_form)} className='icon'><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewsList