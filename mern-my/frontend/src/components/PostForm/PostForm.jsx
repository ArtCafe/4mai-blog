import { useState, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, } from '../../features/posts/postSlice'
//import PostValue from '../PostValue/PostValue'
import Spinner from '../Spinner'
import imagee from '../../assets/fotopost/image.jpg'
import { useParams, useNavigate } from 'react-router-dom'

function PostForm() {
 // const { user } = useSelector((state) => state.auth)
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  )

const [fileUpload, setFileUpload] = useState(false)
const [title, setTitle] = useState('gg')
const [text, setText] = useState('ggggg')
const [zagluska, setZagluska] = useState(imagee)
const params= useParams()
const navigate = useNavigate()

const submitHandler = (e) => {
  try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('text', text)
      formData.append('id', params.id)
     // formData.append('image', image)
      formData.append('image', fileUpload)
     // e.preventDefault()

      dispatch(createPost(formData))
      setText('')
      setTitle('')
      setFileUpload('')
     // clearFormHandler()
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}
//console.log(createPost);
const clearFormHandler = () => {
  setTitle('')
  setText('')
  setFileUpload('')
}

const dispatch = useDispatch()
//const navigate = useNavigate()
//const params = useParams()

//const fetchPost = useCallback(async () => {
   // const { data } = await axios.get(`/posts/${params.id}`)
  //  setTitle(data.title)
  //  setText(data.text)
  //  setOldImage(data.imgUrl)
//}, [])

if (isLoading) {
  return <Spinner/>
}

return (
    <>
    <section className='form'>
      <form  onSubmit={(e) => e.preventDefault()} >
        <div className='form-group'>
          <label htmlFor='text'>Post</label>
          <input
            type='file'
            id ='image'
            name='image'
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
           <label htmlFor='title'>Title</label>
           <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
           <label htmlFor='text'>Text</label>
           <textarea
            type='text'
            name='text'
            id='text'
            value ={text}
            onChange={(e) =>  setText(e.target.value) }
             />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'
          onClick={submitHandler}
          >
            Add Post
          </button>
        </div>
      </form>
    </section>
    
    </>
  )
}

export default PostForm
