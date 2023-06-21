import React, {useEffect, useState} from 'react'
import PostForm from '../../components/PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostModalForm from '../../components/PostModal/PostModalForm';


export default function CreatePost () {
  const { user } = useSelector((state) => state.auth);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

 const navigate = useNavigate();

 useEffect(() => {

  if//(`${!user?.role}` === "1")
  ( `${user?.role}` === "1")
  {
    navigate("/createpost")
  } else {
    navigate("/")
  }
},[user])

  return (
    <>
    <PostModalForm  closeModal={closeModal} modalIsOpen={modalIsOpen}/>
    <h2 onClick={openModal}>Creare Post</h2>
    </>
  )
}
