import { createContext, useState } from "react";
import axios from 'axios'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [updateList, setUpdateList] = useState([])

  const listarReviews = () => {
    axios.get('http://localhost:3001')
      .then((res) => {
        setUpdateList(res.data)

      })
  }

  const removeReview = (id) => {
    let nArr = updateList.filter(e => e.id_form !== id)
    setUpdateList(nArr)
  }

  //funciona para .post
  /*const addReview = (post) => {
    setUpdateList([...updateList, post])
  }*/


  return (
    <Context.Provider value={{ updateList, listarReviews, removeReview}}>

      {children}

    </Context.Provider>
  )
}