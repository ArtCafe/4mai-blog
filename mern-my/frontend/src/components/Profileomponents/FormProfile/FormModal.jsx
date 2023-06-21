
import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import FormProfile from './FormProfile';
import { useDispatch , useSelector} from 'react-redux'
import { createProfile } from '../../../features/auth/authSlice'



export default function FormModal({closeModal, modalIsOpen}) {
  const dispatch = useDispatch()
 console.log(modalIsOpen);
  const { user, isLoading,} = useSelector((state) => state.auth)

  const [fileUpload, setFileUpload] = useState(false)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState('')


  useEffect(() => {
    //setText(user.text)
    if (id === '' ) {
      setId(user?._id);
    } else {
      setName(user?._id);
    }

    if (text === '' ) {
      setText(user?.text);
    } else {
      setText(text);
    }

    if (name === '' ) {
      setName(user?.name);
    } else {
      setName(name);
    }
    
    
  },[name, text, user, id]);

const onSubmit = (e) => {
  
    //setText(user.text)
    
      setText("");
    
      setName("");
    
  

  try {
    const formData = new FormData()
      formData.append('id', user?._id)
    formData.append('name', name)
    formData.append('text', text)
   // formData.append('image', image)
    formData.append('avatar', fileUpload)
    
    
    
    
    /*
    const userData = {
      id: user._id,
      text: text,
      name: name,
      image: fileUpload
    }
*/
    dispatch(createProfile(formData))
  
    setText('')
    setName('')
    setFileUpload('')
   // clearFormHandler()
   // navigate('/posts')
} catch (error) {
    console.log(error)
}

}


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
  >  <button onClick={closeModal}>x</button>
    <h2>Redactare Profile</h2>
    <FormProfile  onSubmit={onSubmit}
     setFileUpload={ setFileUpload}
     text={text} 
     setText={setText} 
     name = {name}
     setName = {setName}
    
    />
    
  </Modal>
       

    </div>
  )
}
