import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReviewsList from './components/ReviewsList';
import Post from './components/Post';
import ModalPost from './components/ModalPost';
import { ContextProvider } from './context/Context';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [reviewVisibleEnModal, setReviewVisibleEnModal] = useState(null);
 
  const mostrarModal = (review) => {
    setReviewVisibleEnModal(review)
    setShowModal(true)
  }

  const ocultarModal = () => setShowModal(false)

  return (
    <div className="App">
      <ContextProvider>
        <Post mostrarModal={mostrarModal}/>
        <ReviewsList mostrarModal={mostrarModal}/>
        <ModalPost modalVisible={showModal} review={reviewVisibleEnModal} ocultarModal={ocultarModal}/>
      </ContextProvider>
    </div>
  );
}

export default App;
