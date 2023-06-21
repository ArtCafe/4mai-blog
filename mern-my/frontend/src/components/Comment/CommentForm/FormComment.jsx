import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';



import Comments from '../Comments';
import Popular_Posts from '../../Popular_Posts./Popular_Posts';
import Modalhoc from '../../../moreUseComponet/Modal/Modal';



export default function FormComment({closeModal, modalIsOpen}) {

    
    
    


  return (
    <div> 
      <Modalhoc
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
  > 
 

    
    
    <Comments/>
    
  </Modalhoc>
       

    </div>
  )
}