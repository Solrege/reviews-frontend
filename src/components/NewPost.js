import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Context } from '../context/Context';

const NewPost = ({ review, cerrarModal }) => {
  if (review == null) {
    review = {
      user_name: "",
      title: "",
      post_text: ""
    }
  }

  const [post, setPost] = useState(review)

  const { listarReviews } = useContext(Context)


  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }


  const createPost = (e) => {
    e.preventDefault()


    // Si id_form existe, entonces hago PUT
    if (!!post.id_form) {
      axios.put(`http://localhost:3001/api/review/${post.id_form}`, post)
        .then((res) => {
          console.log(res)

          Swal.fire(
            'Good job!',
            'Review actualizado!',
            'success'
          )
          cerrarModal()
          listarReviews()


        })

      return;
    }

    // Sino hago POST
    axios.post('http://localhost:3001/api/review', post)
      .then((res) => {
        console.log(res)
        Swal.fire(
          'Good job!',
          'Review Creado!',
          'success'
        )

        cerrarModal()
        listarReviews()


      })

  }



  return (
    <div className='container'>
      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control onChange={handleInput} value={post.user_name} name="user_name" placeholder="Nombre de usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Control onChange={handleInput} value={post.title} name="title" placeholder="Inserte un título para su opinión" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" onChange={handleInput} value={post.post_text} name="post_text" placeholder="Escriba aquí su opinión" rows={5} />
        </Form.Group>
      </Form>

      <Button onClick={createPost} className='outline-primary' type='submit'>Submit</Button>
    </div>
  )
}

export default NewPost