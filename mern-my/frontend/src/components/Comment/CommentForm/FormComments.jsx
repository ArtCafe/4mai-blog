import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';



import Comments from '../Comments';
import Popular_Posts from '../../Popular_Posts./Popular_Posts';



export default function FormComment({closeModal, modalIsOpen}) {

    
    
    


  return (
    <div> 
      <Modal 
      appElement={document.getElementById('root') || undefined}
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    overlayClassName="modal-overlay"
    ariaHideApp={false}
    className="modal-content"
  > 
   <button onClick={closeModal}>x</button>

    
    
    <Comments/>
    
  </Modal>
       

    </div>
  )
}